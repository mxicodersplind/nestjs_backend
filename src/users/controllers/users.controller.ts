/* eslint-disable prettier/prettier */
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { Sendmail } from 'src/auth/utils/Sendmail';
import { sendSMS } from 'src/auth/utils/SendOTP';
import { UserNotFoundException } from '../exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from '../filters/HttpException.filter';
import { CreateUserDto } from './../dtos/CreateUser.dto';
import { UsersService } from './../services/users/users.service';
import { serializedUser } from './../types/index';

@Controller('users')
export class ControllersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  //@UseInterceptors(ClassSerializerInterceptor)
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
  @UseFilters(HttpExceptionFilter) // Toggle for custom Error handling On/off
  @Get('id/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.getUserById(id);

    if (user) return new serializedUser(user);
    /* //Using Custom made exception with Format Control (Exception Filter Interface):*/ else {
      //throw new UserNotFoundException();
      const user__ = this.userService.findUserById(id);
      if (user__) return user__;
      else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    console.log('createUserDto ...');
    const user_ = await this.userService.createUser(createUserDto);

    res.status(201).json({
      message: 'User has been created successfully',
      user: user_,
    });
  }

  @Post('email')
  async sendMail(@Body() body, @Res() res: Response) {
    console.log('sending Mail ...');
    const { message } = body;
    const subject = body.subject;
    const to = body.email;

    try {
      const mail_info = await Sendmail(subject, message, to);
      return res.status(200).json({
        message: 'Mail sent successfully',
        to: to,
        info: mail_info,
      });
    } catch (err) {
      return res.status(201).json({
        message: 'Message has not been sent !',
        error: err,
      });
    }
  }

  @Post('sms')
  async SendSMS_(@Body() body, @Res() res: Response) {
    const { message } = body;
    let to = body.to_phone_number;
    to = '+447777777777';
    const sms = await sendSMS(message, to);
    return res.status(200).json({
      info: sms,
    });
  }
}
