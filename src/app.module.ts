/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import entities from './typeorm';
import { UsersModule } from './users/moleculus_users.module';
import { UtilsModule } from './utils/utils/utils.module';
require('dotenv').config({ path: '.env' }, { debug: false });

// {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: 'Rishabh123$',
//   database: 'nestjs',
//   entities: entities,
//   synchronize: true,
// }

// new- edit
// username: 'postgres',
// password: 'Rishabh123$',

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    UtilsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.HOST}`,
      port: parseInt(`${process.env.PORT_DB}`),
      username: `${process.env.USERNAME_DB}`,
      password: `${process.env.PASSWORD_DB}`,
      database: `${process.env.DATABASE}`,
      entities: entities,
      synchronize: true,
    }),
    AuthModule,
    PassportModule.register({ session: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
