/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { moleculus_country as CountryRepository } from '../../typeorm';
import { CreateCountryDto } from '../dtos/CreateCountry.dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryRepository)
    private readonly countryRepository: Repository<CountryRepository>,
  ) {}

  createCountry(createCountryDto: CreateCountryDto) {
    console.log('Inside Country Service Layer ...');
    const country = this.countryRepository.create(createCountryDto);
    return this.countryRepository.save(country);
  }
}
