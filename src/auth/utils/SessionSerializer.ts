/* eslint-disable prettier/prettier */
import { User } from './../../users/types/index';
import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UsersService } from "src/users/services/users/users.service";

export class SessionSerializer extends PassportSerializer {

    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) {
        super();
    }
    async serializeUser(user: User, done: (err, user) => void) {
        console.log("serializeUser ...");
        done(null, user);
    }
    async deserializeUser(user: User, done: (err, user) => void) {
        console.log("deserializeUser ...");
        const userFound = await this.userService.getUserById(user.id);
        return userFound ? done(null, userFound) : done(null, null);
    }
}

