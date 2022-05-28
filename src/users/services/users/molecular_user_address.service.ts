/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { CreateAddressDto } from "src/users/dtos/addressDtos/CreateUserAddress.dtos";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { moleculus_user_address as AddressEntity } from '../../../typeorm';

@Injectable()
export class UserAddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
    ) { }

    //find user address by user id
    async findAddressByUserId(userId: number) {
        return await this.addressRepository.find({
        });
    }

    //create user address
    createAddress(createAddressDto: CreateAddressDto) {
        console.log('In service');
        const newAddress = this.addressRepository.create(createAddressDto);
        return this.addressRepository.save(newAddress);

    }

}