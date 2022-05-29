/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  country_name: string;

  @IsString()
  country_code: string;

  @IsNotEmpty()
  country_logo: string;
}
