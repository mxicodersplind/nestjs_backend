import { comparePassword } from 'src/utils/bcrypt';
/* eslint-disable*/ /*prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';
import { moleculus_users as UserEntity } from '../../../typeorm';
import { User } from '../../types';
import { CreateUserDto } from './../../dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: User[] = [];

  getUsers() {
    // return this.users.map((user) => new serializedUser(user));
    const users = this.userRepository.find({});
    return users;
  }

  getUserByUserName(username: string) {
    return this.users.find((user) => user.username === username);
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email_id: email },
    });
    return user;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  async createUser(createuserDto: CreateUserDto) {
    console.log('Inside User Service Layer ...');
    const password = encodePassword(createuserDto.password);

    const newUser = this.userRepository.create({ ...createuserDto, password });
    const newUser_ = { ...newUser };
    const req_data = await axios
      .get('https://ipinfo.io')
      .then((res) => res.data);
    newUser_.created_ip = req_data.ip;
    newUser_.modified_ip = req_data.ip;
    newUser_.created_datetime = new Date();
    newUser_.country_name = req_data.country;
    if (
      (newUser_.country_name === 'IN' ||
        newUser_.country_name === 'INDIA' ||
        newUser_.country_name === 'India' ||
        newUser_.country_name === 'india') &&
      (newUser_.state_name === '' ||
        newUser_.state_name === null ||
        newUser_.state_name === undefined ||
        newUser_.state_name === ' ')
    ) {
      newUser_.state_name = req_data.region;
    }
    newUser_.zipcode = req_data.postal;
    newUser_.city = req_data.city;
    if (
      newUser_.country_name === 'IN' ||
      newUser_.country_name === 'INDIA' ||
      newUser_.country_name === 'India' ||
      newUser_.country_name === 'india'
    ) {
      newUser_.default_currency = 'INR';
    }
    if (
      newUser_.country_name === 'IN' ||
      newUser_.country_name === 'INDIA' ||
      newUser_.country_name === 'India' ||
      newUser_.country_name === 'india'
    ) {
      newUser_.phone_code = 91;
    }
    console.log({ req_data });
    return this.userRepository.save(newUser_);
  }

  //find username from database:
  async findUserByUsername(username: string) {
    const user = await this.userRepository.findOne({
      where: { fullname: username },
    });
    return user;
  }

  findUserById = async (id: number) => {
    return await this.userRepository.findOne({ where: { user_id: id } });
  };

  //findCoin
  findCoin = async (coin: string) => {
    return await this.userRepository.findOne({});
  };
}
