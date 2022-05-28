/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Body, Post, Res } from '@nestjs/common';

import { Controller, Get, Inject, Param } from "@nestjs/common";
import { CoinService } from "../services/users/coin.service";
import { CreateCoinDto } from '../dtos/coinDtos/CreateCoin.dtos'
import { Response } from 'express';

@Controller('coins')
export class ControllersController {
    constructor(@Inject('COIN_SERVICE') private readonly coinService: CoinService) { }

    @Get('')
    async getAllCoins(@Res() res: Response) {
        const coins = await this.coinService.findAllCoins();
        res.status(200).json(coins);
    }


    @Get('coin/:name')
    getCoins(@Param('name') name: string) {
        return this.coinService.findCoinByName(name);
    }

    @Post('create')
    async createCoin(@Body() createCoinDto: CreateCoinDto, @Res() res: Response) {
        const newC = await this.coinService.createCoin(createCoinDto)
        return res.status(201).json(newC);
    }


}