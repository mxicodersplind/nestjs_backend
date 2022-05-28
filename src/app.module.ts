/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import entities from './typeorm';
import { UsersModule } from './users/moleculus_users.module';
import { UtilsModule } from './utils/utils/utils.module';


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
  imports: [CustomersModule, UsersModule, UtilsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'nestjs_db',
    entities: entities,
    synchronize: true,
  }), AuthModule, PassportModule.register({ session: true })],
  controllers: [],
  providers: [],
})
export class AppModule { }
