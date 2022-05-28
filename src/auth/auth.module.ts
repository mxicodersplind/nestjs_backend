import { SessionSerializer } from './utils/SessionSerializer';
/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { moleculus_users } from '../typeorm'
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/LocalStrategy';

@Module({
  imports: [TypeOrmModule.forFeature([moleculus_users])],
  controllers: [AuthController],
  providers: [{
    provide: 'AUTH_SERVICE',
    useClass: AuthService,
  }, {
    provide: "USER_SERVICE",
    useClass: UsersService,
  },
    LocalStrategy, SessionSerializer]
})
export class AuthModule { }
