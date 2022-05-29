/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateStateDto {
  @IsNotEmpty()
  state_name: string;

  //@IsString()
  state_code: string;

  //@IsNotEmpty()
  state_logo: string;
}
