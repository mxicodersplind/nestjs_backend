/* eslint-disable*/ /*prettier/prettier */
import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";


export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const request = context.getRequest<Request>();

        // console.log("context:  \n", context);
        // console.log("exception:  \n", exception);

        response.send({ status: exception.getStatus(), message: exception.getResponse() });

    }
}