"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCustomerDto = void 0;
/* eslint-disable prettier/prettier */
var CreateAddressDto_1 = require("./CreateAddressDto");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var CreateCustomerDto = /** @class */ (function () {
    function CreateCustomerDto() {
    }
    __decorate([
        (0, class_validator_1.IsEmail)()
    ], CreateCustomerDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateCustomerDto.prototype, "id");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateCustomerDto.prototype, "name");
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return CreateAddressDto_1.CreateAddressDto; }),
        (0, class_validator_1.IsNotEmptyObject)()
    ], CreateCustomerDto.prototype, "address");
    return CreateCustomerDto;
}());
exports.CreateCustomerDto = CreateCustomerDto;
