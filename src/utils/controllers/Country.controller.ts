/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CountryService } from '../services/Country.service';
import { CreateCountryDto } from './../dtos/CreateCountry.dto';

@Controller('countries')
export class CountryController {
  constructor(
    @Inject('COUNTRY_SERVICE') private readonly countryService: CountryService,
  ) {}

  @Get('')
  async getAllCountries() {
    console.log('In controller');
    //const countries = await this.countryService.getAllCountries();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async createCountry(@Body() createCountryDto: CreateCountryDto) {
    const countries = this.countryService.createCountry(createCountryDto);
    return countries;
  }
}
