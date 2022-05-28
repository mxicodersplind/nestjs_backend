/* eslint-disable*/ /*prettier/prettier */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { moleculus_users, moleculus_user_address } from '../typeorm';
import { ControllersController as addressController } from './controllers/molecular_user_address.controller';
import { ControllersController } from './controllers/users.controller';
/* eslint-disable*/ /*prettier/prettier */
import { UserAddressService } from './services/users/molecular_user_address.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([moleculus_users, moleculus_user_address]),
  ],
  controllers: [ControllersController, addressController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    {
      provide: 'USER_ADDRESS_SERVICE',
      useClass: UserAddressService,
    },
  ],
})
export class UsersModule { }
