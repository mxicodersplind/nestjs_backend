/* eslint-disable prettier/prettier */
import { CreateAddressDto } from './CreateAddressDto';

import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
    @IsEmail()
    email: string;
    @IsNumber()
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    name: string;


    @ValidateNested()
    @Type(() => CreateAddressDto)
    @IsNotEmptyObject()
    address: CreateAddressDto
}
