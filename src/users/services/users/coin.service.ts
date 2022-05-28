/* eslint-disable*/ /*prettier/prettier */
import { CreateCoinDto } from '../../dtos/coinDtos/CreateCoin.dtos';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Coin as CoinEntity } from '../../../typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoinService {
    constructor(
        @InjectRepository(CoinEntity)
        private readonly coinRepository: Repository<CoinEntity>,
    ) { }

    //find all coins
    findAllCoins() {
        const coins = this.coinRepository.find({});
        return coins;
    }

    findCoinByName = async (name: string) => {
        return await this.coinRepository.find({
            where: {
                name: name,
            },
        });
    };
    createCoin(createcoinDto: CreateCoinDto) {
        console.log('Inside Coin Service Layer ...');
        const newCoin = this.coinRepository.create(createcoinDto);
        return this.coinRepository.save(newCoin);
    }
}
