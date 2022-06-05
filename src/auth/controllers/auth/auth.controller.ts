/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
//import { AuthService } from './../../services/auth/auth.service';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-empty-function
// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  Response,
  Session,
  UseGuards
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request as ReqEx, Response as resEx } from 'express';
import { AuthService } from '../../services/auth/auth.service';
import { AuthenticatedGuard } from '../../utils/LocalGuard';
require('dotenv').config({ debug: false });

let jwt: string = '';
@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {}
  //@UseGuards(AuthenticatedGuard)
  @Post('login')
  async login(@Req() req, @Response() res, @Body() body) {
    console.log('body: ', body);
    try {
      const logintoken__ = req.headers.authorization.split(' ')[1];
      if (!logintoken__) {
        throw new Error('Token not found');
      } else if (jwt !== logintoken__) {
        res.status(401).json({
          message: 'Invalid JWT',
        });
      } else if (jwt === logintoken__) {
        try {
          {
            const userInfo = await this.authService.validateUserByEmail(
              body.email_id,
              body.password,
            );
            if (userInfo) {
              const newUserInfo = { ...userInfo, password: undefined };
              return res.status(200).json({
                message: 'Success! User Logged In',
                user_id: newUserInfo.user_id,
                name: newUserInfo.fullname,
                email: newUserInfo.email_id,
              });
            } else if (userInfo === null) {
              return res.status(401).json({
                message: 'Invalid Credentials',
              });
            }
          }
        } catch (err) {
          res.status(401).json({
            message: 'Some Error Occured',
            error: err,
          });
        }
      } else {
        return res.status(401).json({
          message: 'Invalid Token',
        });
      }
      // const cookie = req.cookies['jwt'];
      // const logintoken_ = await this.jwtService.verifyAsync(cookie);
      // console.log('Request object authorization:  ', logintoken_);
    } catch (error) {
      res.status(401).json({
        message: 'Some Error Occured',
        error,
      });
    }
  }

  //register user:
  @Post('register')
  async register(@Body() Body) {
    return Body;
  }

  @Get('sessionInfo')
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    console.log('Session Id: ', session.id);
    session.authenticated = true;
    return session;
  }

  @Get('/gettoken')
  async getToken(@Req() req, @Response() res: resEx) {
    await this.jwtService.signAsync({ username: 'test' });
    // logT = jwt;
    try {
      res.cookie('jwt', jwt, { httpOnly: true }).json({
        message: 'Success!',
        jwt,
      });
    } catch (err) {
      res.status(401).json({
        message: ' error: ',
        error: err,
      });
    }
  }

  @Get('test')
  async test(@Req() req, @Response() res: resEx) {
    const cookie_ = req.cookies.jwt;
    res.json({
      cookie: cookie_,
    });
  }

  @UseGuards(AuthenticatedGuard)
  @Get('status')
  async getAuthStatus(@Req() req: ReqEx) {
    return req.user;
  }
}
