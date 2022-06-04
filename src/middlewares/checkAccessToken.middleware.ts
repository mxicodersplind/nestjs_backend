/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
//import DeviceDetector from 'device-detector-js';

require('dotenv').config({ debug: false });
// import DeviceDetector = require('device-detector-js');

@Injectable()
export class checkAccessToken implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('I am inside the Middleware:: checkAccessToken!');
    // const deviceDetector = new DeviceDetector();
    // const userAgent =
    //   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36';
    // const device = deviceDetector.parse(userAgent);

    //console.log(device);
    // console.log(req.headers.accesstoken);
    // console.log(process.env.accesstoken);

    if (req.headers.accesstoken === `${process.env.accesstoken}`) {
      next();
    } else {
      res.json({
        message: `Unauthorized, Invalid token:: ${req.headers.accesstoken} provided`,
      });
    }
  }
}
