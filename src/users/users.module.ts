import { TypeOrmModule } from '@nestjs/typeorm';
/* eslint-disable*/ /*prettier/prettier */
import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/users.controller';
import { UsersService } from './services/users/users.service';
import { User } from '../typeorm'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [ControllersController],
  providers: [{
    provide: 'USER_SERVICE',
    useClass: UsersService,
  }]
})
export class UsersModule { }
