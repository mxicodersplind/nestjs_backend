"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CustomersController = void 0;
var common_1 = require("@nestjs/common");
var CustomersController = /** @class */ (function () {
    function CustomersController(customersService) {
        this.customersService = customersService;
    }
    CustomersController.prototype.getCustomer = function (id, req, res) {
        console.warn(id);
        var customer = this.customersService.findCustomerbyId(id);
        if (customer) {
            res.status(200).json(customer);
        }
        if (!customer) {
            res.status(404).json({
                message: 'Customer not found'
            });
        }
    };
    CustomersController.prototype.searchCustomerById = function (id) {
        var customer = this.customersService.findCustomerbyId(id);
        if (customer)
            return customer;
        else
            throw new common_1.HttpException('Customer not found', common_1.HttpStatus.NOT_FOUND);
    };
    CustomersController.prototype.getAllCustomers = function () {
        return this.customersService.getAllCustomers();
    };
    CustomersController.prototype.createCustomer = function (createCustomerDto, res) {
        console.log(createCustomerDto);
        var customer = this.customersService.createCustomer(createCustomerDto);
        res.status(201).json({
            message: 'Customer has been created successfully',
            customer: customer
        });
    };
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
        __param(1, (0, common_1.Req)()),
        __param(2, (0, common_1.Res)())
    ], CustomersController.prototype, "getCustomer");
    __decorate([
        (0, common_1.Get)('/search/:id'),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe))
    ], CustomersController.prototype, "searchCustomerById");
    __decorate([
        (0, common_1.Get)('')
    ], CustomersController.prototype, "getAllCustomers");
    __decorate([
        (0, common_1.Post)('create'),
        (0, common_1.UsePipes)(common_1.ValidationPipe),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Res)())
    ], CustomersController.prototype, "createCustomer");
    CustomersController = __decorate([
        (0, common_1.Controller)('customers')
    ], CustomersController);
    return CustomersController;
}());
exports.CustomersController = CustomersController;
