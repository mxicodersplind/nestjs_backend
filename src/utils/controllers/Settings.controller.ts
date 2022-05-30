/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import {
  Body,
  Controller,
  Inject,
  Param,
  Post,
  Put,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { SettingService } from '../services/Settings.service';
import { CreateSettingDto } from './../dtos/CreateSetting.dto';

@Controller('settings')
export class SettingsController {
  constructor(
    @Inject('SETTING_SERVICE') private readonly settingService: SettingService,
  ) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  async createState(@Body() createSettingDto: CreateSettingDto) {
    const new_setting = this.settingService.createSetting(createSettingDto);
    return new_setting;
  }

  @Put('edit/:id')
  @UsePipes(ValidationPipe)
  async editSetting(
    @Param('id') id: number,
    @Body() createSettingDto: CreateSettingDto,
    @Res() res: Response,
  ) {
    const new_setting = await this.settingService.editSetting(
      id,
      createSettingDto,
    );

    if (new_setting) {
      return res.status(200).json({
        message: 'Setting updated successfully',
        new_setting,
      });
    } else {
      res.status(400).json({
        message: 'oops... Setting not found',
      });
    }
  }
}
