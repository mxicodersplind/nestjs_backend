/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type } from 'os';
import { Repository } from 'typeorm';
import { moleculus_settings as SettingRepository } from '../../typeorm';
import { CreateSettingDto } from './../dtos/CreateSetting.dto';
import fetch from 'node-fetch';
import axios from 'axios';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(SettingRepository)
    private readonly settingRepository: Repository<SettingRepository>,
  ) {}

  async createSetting(createSettingDto: CreateSettingDto) {
    console.log('Inside Setting Service Layer: "createSetting" ...');
    const setting = this.settingRepository.create(createSettingDto);
    const set = { ...setting };
    const req_data = await axios
      .get('https://ipinfo.io')
      .then((res) => res.data);
    console.log({ req_data });
    set.created_ip = req_data.ip;
    set.created_datetime = new Date();
    console.log('Set', { set });
    return this.settingRepository.save(set, req_data);
  }

  async editSetting(id: number, createSettingDto: CreateSettingDto) {
    console.log('Inside Setting Service Layer: "editSetting" ...');
    const setting = await this.settingRepository.findOne({
      where: { setting_id: id },
    });

    if (setting) {
      const setting_ = this.settingRepository.merge(setting, createSettingDto);
      console.log({ setting_ });
      return await this.settingRepository.save(setting_);
    } else {
      return null;
    }
  }

  //get all settings
  async getAllSettings() {
    console.log('Inside Setting Service Layer: "getAllSettings" ...');
    return await this.settingRepository.find();
  }

  //get setting
  async getSetting(id: number) {
    console.log('Inside Setting Service Layer: "getSetting" ...');
    return await this.settingRepository.findOne({
      where: { setting_id: id },
    });
  }

  //delete setting:
  async deleteSetting(id: number) {
    console.log('Inside Setting Service Layer: "deleteSetting" ...');
    const setting = await this.settingRepository.findOne({
      where: { setting_id: id },
    });

    if (setting) {
      return await this.settingRepository.remove(setting);
    } else {
      return null;
    }
  }
}
