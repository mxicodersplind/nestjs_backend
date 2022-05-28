/* eslint-disable prettier/prettier */
import { IsNotEmpty, isNotEmpty, IsNumber, IsString, IsNumberString, IsDate } from 'class-validator';

export class CreateAddressDto {
    address_id: number;


    created_datetime: Date;

    @IsNotEmpty()
    address_line2: string;

    @IsNotEmpty()
    address_line1: string;

    //@IsNotEmpty()
    user_address_id: number;
}