/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ValidationPipe } from '@nestjs/common';
import { Body, Post, Res, UsePipes } from '@nestjs/common';

import { Controller, Get, Inject, Param } from "@nestjs/common";
import { UserAddressService } from "../services/users/molecular_user_address.service";
import { CreateAddressDto } from '../dtos/addressDtos/CreateUserAddress.dtos'
import { Response } from 'express';

@Controller('address')
export class ControllersController {
    constructor(@Inject('USER_ADDRESS_SERVICE') private readonly userAddressService: UserAddressService) { }

    @Get('')
    async getAllAddresses(@Res() res: Response) {
        const addresses = await this.userAddressService.findAddressByUserId(2);
        res.status(200).json(addresses);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    async createAddress(@Body() createAddressDto: CreateAddressDto, @Res() res: Response) {
        console.log('In controller');
        console.log("createAddressDto", createAddressDto);
        
        const newAddress = await this.userAddressService.createAddress(createAddressDto);
        return res.status(201).json(newAddress);
    }
}