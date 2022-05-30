/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { moleculus_settings as SettingRepository } from '../../typeorm';
import { CreateSettingDto } from './../dtos/CreateSetting.dto';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(SettingRepository)
    private readonly settingRepository: Repository<SettingRepository>,
  ) {}

  createSetting(createSettingDto: CreateSettingDto) {
    console.log('Inside Setting Service Layer ...');
    const setting = this.settingRepository.create(createSettingDto);
    return this.settingRepository.save(setting);
  }

  async editSetting(id: number, createSettingDto: CreateSettingDto) {
    console.log('Inside Setting Service Layer 2 ...');
    const setting = await this.settingRepository.findOne({
      where: { setting_id: id },
    });

    if (setting) {
      const setting_ = this.settingRepository.merge(setting, createSettingDto);
      return await this.settingRepository.save(setting_);
    } else {
      return null;
    }
  }
}
