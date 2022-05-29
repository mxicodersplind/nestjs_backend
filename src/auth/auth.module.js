'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.AuthModule = void 0;
var SessionSerializer_1 = require('./utils/SessionSerializer');
/* eslint-disable prettier/prettier */
var typeorm_1 = require('@nestjs/typeorm');
var common_1 = require('@nestjs/common');
var users_service_1 = require('../../../../../../../src/users/services/users/users.service');
var auth_controller_1 = require('./controllers/auth/auth.controller');
var auth_service_1 = require('./services/auth/auth.service');
var typeorm_2 = require('../typeorm');
var LocalStrategy_1 = require('./utils/LocalStrategy');
var AuthModule = /** @class */ (function () {
  function AuthModule() {}
  AuthModule = __decorate(
    [
      (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([typeorm_2.User])],
        controllers: [auth_controller_1.AuthController],
        providers: [
          {
            provide: 'AUTH_SERVICE',
            useClass: auth_service_1.AuthService,
          },
          {
            provide: 'USER_SERVICE',
            useClass: users_service_1.UsersService,
          },
          LocalStrategy_1.LocalStrategy,
          SessionSerializer_1.SessionSerializer,
        ],
      }),
    ],
    AuthModule,
  );
  return AuthModule;
})();
exports.AuthModule = AuthModule;
