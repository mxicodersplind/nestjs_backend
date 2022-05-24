/* eslint-disable prettier/prettier */
import { UsersService } from './../../../users/services/users/users.service';

import { Inject, Injectable } from '@nestjs/common';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) { }

    async validateUser(username: string, password: string) {

        const userDB = await this.userService.findUserByUsername(username);
        if (userDB) {

            const matched = comparePassword(password, userDB.password);
            if (matched) {
                console.log("Validating Succesful ...");
                return userDB;
            } else {
                console.log("Incorrect Password ...");
                return null;
            }

        } else {
            console.log("Validation Failed ...");
            return null
        }
    }
}




