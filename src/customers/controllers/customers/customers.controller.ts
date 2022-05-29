/* eslint-disable*/ /*prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from './../../dtos/customer.dto';
import { CustomersService } from './../../services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.warn(id);

    const customer = this.customersService.findCustomerbyId(id);
    if (customer) {
      res.status(200).json(customer);
    }
    if (!customer) {
      res.status(404).json({
        message: 'Customer not found',
      });
    }
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerbyId(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  @Get('')
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(
    @Body() createCustomerDto: CreateCustomerDto,
    @Res() res: Response,
  ) {
    console.log(createCustomerDto);
    const customer = this.customersService.createCustomer(createCustomerDto);
    res.status(201).json({
      message: 'Customer has been created successfully',
      customer,
    });
  }
}
