"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAddressDto = void 0;
/* eslint-disable prettier/prettier */
var class_validator_1 = require("class-validator");
var CreateAddressDto = /** @class */ (function () {
    function CreateAddressDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateAddressDto.prototype, "line1");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateAddressDto.prototype, "city");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateAddressDto.prototype, "state");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateAddressDto.prototype, "zip");
    return CreateAddressDto;
}());
exports.CreateAddressDto = CreateAddressDto;
