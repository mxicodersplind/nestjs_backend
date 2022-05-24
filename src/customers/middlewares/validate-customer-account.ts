/* eslint-disable */
/*prettier-disable*/
import { NextFunction, Request, Response } from 'express';
import { NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';


import { Injectable } from "@nestjs/common";

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('I am inside the Middleware :: validate-customer-account MiddleWare!!');
        const { isenabled } = req.headers;
        if (isenabled === 'true') {
            next();
        }
        else {
            throw new HttpException('Customer Account is Disabled', HttpStatus.UNAUTHORIZED);
        }
    }
}