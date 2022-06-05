/* eslint-disable prettier/prettier */
import { UsersService } from './../../../users/services/users/users.service';
import { Inject, Injectable } from '@nestjs/common';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async validateUserByUsername(username: string, password: string) {
    //const userDB = await this.userService.findUserByUsername(username);
    console.log('Inside Auth Service Layer...');
    const userDB = await this.userService.findUserByEmail(username);
    if (userDB) {
      const matched = comparePassword(password, userDB.password);
      if (matched) {
        console.log('User Validation Succesful ...');
        return userDB;
      } else {
        console.log('Incorrect Password ...');
        return null;
      }
    } else {
      console.log('Validation Failed ...');
      return null;
    }
  }

  async validateUserByEmail(email_id: string, password: string) {
    //const userDB = await this.userService.findUserByUsername(username);
    console.log('Inside Auth Service Layer...');
    const userDB = await this.userService.findUserByEmail(email_id);
    if (userDB) {
      const matched = comparePassword(password, userDB.password);
      if (matched) {
        console.log('User Validation Succesful ...');
        return userDB;
      } else {
        console.log('Incorrect Password ...');
        return null;
      }
    } else {
      console.log('Validation Failed ...');
      return null;
    }
  }
}
