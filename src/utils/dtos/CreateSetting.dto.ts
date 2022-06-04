/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { setting_status_enum } from 'src/typeorm/Moleculus_Settings';

export class CreateSettingDto {
  @IsNotEmpty()
  setting_name: string;

  @IsString()
  setting_value: string;

  //@IsEnum(setting_status_enum)
  setting_status: setting_status_enum;

  // created_ip = fetch('https://api.ipify.org').then((res) => res.text());
}
