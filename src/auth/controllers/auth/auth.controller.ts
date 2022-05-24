//import { Request } from 'express';
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Req, Request, Response, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
//import { Request } from 'express';
import { Request as ReqEx } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from '../../utils/LocalGuard';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('login')
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async login(@Req() req, @Response() res) {
        res.send("Login Successful");
    }


    @Get('')
    async getAuthSession(@Session() session: Record<string, any>) {
        console.log(session);
        console.log("Session Id: ", session.id);
        session.authenticated = true;
        return session;
    }

     @UseGuards(AuthenticatedGuard)
    @Get('status')
    async getAuthStatus(@Req() req: ReqEx) {
        return req.user;
    }
}



