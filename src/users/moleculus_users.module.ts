import { CoinService } from './services/users/coin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
/* eslint-disable*/ /*prettier/prettier */
import { UserAddressService } from './services/users/molecular_user_address.service'
import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/users.controller';
import { ControllersController as coinController } from './controllers/coins.controller';
import { ControllersController as addressController } from './controllers/molecular_user_address.controller';
import { UsersService } from './services/users/users.service';
import { moleculus_users, Coin, moleculus_user_address } from '../typeorm'

@Module({
  imports: [
    TypeOrmModule.forFeature([moleculus_users, Coin, moleculus_user_address]),
  ], 
  controllers: [ControllersController, coinController, addressController],
  providers: [{
    provide: 'USER_SERVICE',
    useClass: UsersService,
  }, {
    provide: 'COIN_SERVICE',
    useClass: CoinService,
  }, {
    provide: 'USER_ADDRESS_SERVICE',
    useClass: UserAddressService,
  }
  ]
})
export class UsersModule { }
