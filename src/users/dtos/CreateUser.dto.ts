/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(4)
    fullname: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email_id: string;

    @IsNotEmpty()
    @IsNumber()
    country_id: number;



    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(15)
    password: string;
}