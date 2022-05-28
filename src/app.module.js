"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var customers_module_1 = require("./customers/customers.module");
var users_module_1 = require("./users/users.module");
var auth_module_1 = require("./auth/auth.module");
var typeorm_2 = require("./typeorm");
var passport_1 = require("@nestjs/passport");
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [customers_module_1.CustomersModule, users_module_1.UsersModule, typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'admin',
                    password: 'admin',
                    database: 'nestjs_db',
                    entities: typeorm_2["default"],
                    synchronize: true
                }), auth_module_1.AuthModule, passport_1.PassportModule.register({ session: true })],
            controllers: [],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
