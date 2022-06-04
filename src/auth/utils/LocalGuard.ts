/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    //console.log('Context:  ', context.switchToHttp().getRequest());
    console.log(
      'per.canActivat',
      (await super.canActivate(context)) as boolean,
    );
    const result = (await super.canActivate(context)) as any;
    console.log('%%%%%%%%%%%  %%%%%%%%  %%%%%%%%%%%    %%%%%%%%%%%%%%% ');
    console.log('Result: :\n   /n  ', result);
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<any> {
    const req = context.switchToHttp().getRequest<Request>();
    return req.isAuthenticated();
  }
}
