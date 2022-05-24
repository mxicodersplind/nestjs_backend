/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength, MinLength, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(4)
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;


    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(15)
    password: string;
}