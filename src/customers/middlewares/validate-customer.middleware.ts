/* eslint-disable*/ /*prettier/prettier */

import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('I am inside the MiddlewaRE: Validate Customer MiddleWare !!!');
        const { authorization } = req.headers

        if (!authorization) {
            throw new HttpException('No authorization token Provided... ', HttpStatus.UNAUTHORIZED)
        }
        if (authorization !== '123') {
            throw new HttpException('Invalid authorization token... ', HttpStatus.UNAUTHORIZED)
        }
        next()


    }
}   