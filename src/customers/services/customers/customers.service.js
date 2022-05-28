"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomersService = void 0;
/*eslint-disable */
var common_1 = require("@nestjs/common");
var CustomersService = /** @class */ (function () {
    function CustomersService() {
        this.customers = [
            {
                id: 1,
                name: 'John Doe',
                email: 'johnDoeSally@protonmail.com'
            },
            {
                id: 2,
                name: 'Adam watson',
                email: 'adam_wat@yahoo.co.in'
            },
            {
                id: 3,
                name: 'Sally Doe',
                email: 'sally_doe@gmail.com'
            },
            {
                id: 4,
                name: 'Peter Parker',
                email: 'peter_parker@gmail.com'
            },
            {
                id: 5,
                name: 'Tonnyy Doland',
                email: 'dol_tonnyy654@gmail.com'
            },
        ];
    }
    CustomersService.prototype.findCustomerbyId = function (id) {
        return this.customers.find(function (user) { return user.id === id; });
    };
    CustomersService.prototype.createCustomer = function (customerDto) {
        this.customers.push(customerDto);
        return customerDto;
    };
    CustomersService.prototype.getAllCustomers = function () {
        return this.customers;
    };
    CustomersService = __decorate([
        (0, common_1.Injectable)()
    ], CustomersService);
    return CustomersService;
}());
exports.CustomersService = CustomersService;
