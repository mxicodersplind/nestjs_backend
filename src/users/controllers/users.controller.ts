/* eslint-disable*/ /*prettier/prettier */
import { CreateUserDto } from './../dtos/CreateUser.dto';
import { serializedUser } from './../types/index';
import { UsersService } from './../services/users/users.service';
import { Controller, Get, Inject, Param, HttpStatus, HttpException, UseInterceptors, ClassSerializerInterceptor, ParseIntPipe, UseFilters, Post, Body, UsePipes, ValidationPipe, Res } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/HttpException.filter';
import { UserNotFoundException } from '../exceptions/UserNotFound.exception';
import { Response } from 'express';


@Controller('users')
export class ControllersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }


    @UseInterceptors(ClassSerializerInterceptor)
    @Get('username/:username')
    getUserByName(@Param('username') username: string) {
        const user = this.userService.getUserByUserName(username);
        if (user) {
            return new serializedUser(user);
            // console.log("user ...", user);
            // let newUser = {};
            // newUser['username'] = user.username;
            // newUser['id'] = user.id;
            // return newUser;
        }
        // else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        else {
            const user__ = this.userService.findUserByUsername(username);
            if (user__) {
                return user__;
            } else {
                throw new UserNotFoundException();
            }
        }
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)   // Toggle for custom Error handling On/off
    @Get('id/:id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.getUserById(id);

        if (user) return new serializedUser(user);

        /* //Using Custom made exception with Format Control (Exception Filter Interface):*/
        else {
            //throw new UserNotFoundException();
            const user__ = this.userService.findUserById(id);
            if (user__) return user__
            else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
        console.log("createUserDto ...");
        const user_ = await this.userService.createUser(createUserDto);

        res.status(201).json({
            message: 'User has been created successfully',
            user: user_,
        })
    }
}  
