/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { User } from './typeorm/User';
import { AuthModule } from './auth/auth.module';
import entities from './typeorm'
import { PassportModule } from '@nestjs/passport';


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


@Module({
  imports: [CustomersModule, UsersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Rishabh123$',
    database: 'nestjs_db',
    entities: entities,
    synchronize: true,
  }), AuthModule, PassportModule.register({ session: true })],
  controllers: [],
  providers: [],
})
export class AppModule { }
