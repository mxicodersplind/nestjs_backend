/* eslint-disable prettier/prettier */
import { IsNotEmpty, isNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCoinDto {
    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @IsString()
    symbol: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    description: string;
}
export class CreateAddressDto {
    @IsNotEmpty()
    @IsString()
    address_line1: string;

    @IsNotEmpty()
    @IsString()
    address_line2: string;

    @IsNotEmpty()
    @IsString()
    created_ip: string;

    @IsNotEmpty()
    @IsString()
    created_datetime: string;

    @IsNotEmpty()
    @IsNumber()
    user_address_id: number;
}