import { SessionSerializer } from './utils/SessionSerializer';
/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { moleculus_users } from '../typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/LocalStrategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([moleculus_users]),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '48000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    LocalStrategy,
    SessionSerializer,
  ],
})
export class AuthModule {}
