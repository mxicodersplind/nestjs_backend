"use strict";
/* eslint-disable*/ /*prettier/prettier */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ValidateCustomerMiddleware = void 0;
var common_1 = require("@nestjs/common");
var ValidateCustomerMiddleware = /** @class */ (function () {
    function ValidateCustomerMiddleware() {
    }
    ValidateCustomerMiddleware.prototype.use = function (req, res, next) {
        console.log('I am inside the MiddlewaRE: Validate Customer MiddleWare !!!');
        var authorization = req.headers.authorization;
        if (!authorization) {
            throw new common_1.HttpException('No authorization token Provided... ', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (authorization !== '123') {
            throw new common_1.HttpException('Invalid authorization token... ', common_1.HttpStatus.UNAUTHORIZED);
        }
        next();
    };
    ValidateCustomerMiddleware = __decorate([
        (0, common_1.Injectable)()
    ], ValidateCustomerMiddleware);
    return ValidateCustomerMiddleware;
}());
exports.ValidateCustomerMiddleware = ValidateCustomerMiddleware;
