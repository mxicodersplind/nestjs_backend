/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */


import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { moleculus_state as StateRepository } from '../../typeorm'
import { Repository } from 'typeorm';
import { CreateStateDto } from './../dtos/CreateState.dto';

@Injectable()
export class StateService {
    constructor(@InjectRepository(StateRepository) private readonly stateRepository: Repository<StateRepository>) {
    }

    createState(createStateDto: CreateStateDto) {
        console.log("Inside State Service Layer ...");
        const state = this.stateRepository.create(createStateDto);
        return this.stateRepository.save(state);
    }


}