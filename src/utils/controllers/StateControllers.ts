/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import { ValidationPipe } from '@nestjs/common';
import { CreateStateDto } from "../dtos/CreateState.dto";
import { Body, Controller, Get, Inject, Post, UsePipes } from "@nestjs/common";
import { StateService } from "../services/State.service";

@Controller('states')
export class StateController {
    constructor(@Inject('STATE_SERVICE') private readonly stateService: StateService) { }

    @Post('create')
    @UsePipes(ValidationPipe)
    async createState(@Body() createStateDto: CreateStateDto) {

        const states = this.stateService.createState(createStateDto);
        return states;
    }
}