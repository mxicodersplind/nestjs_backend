/*eslint-disable */
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './../../dtos/customer.dto';
import { Customer } from './../../types/Customer';

@Injectable()
export class CustomersService {

    private customers: Customer[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'johnDoeSally@protonmail.com',
            //createdAt: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
        },
        {
            id: 2,
            name: 'Adam watson',
            email: 'adam_wat@yahoo.co.in',
            //createdAt: new Date().getDate() + '-' + new Date().getMinutes() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
        },
        {
            id: 3,
            name: 'Sally Doe',
            email: 'sally_doe@gmail.com',
            //createdAt: new Date().getDate() + '-' + new Date().getMinutes() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
        },
        {
            id: 4,
            name: 'Peter Parker',
            email: 'peter_parker@gmail.com',
            //createdAt: new Date().getDate() + '-' + new Date().getMinutes() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
        },
        {
            id: 5,
            name: 'Tonnyy Doland',
            email: 'dol_tonnyy654@gmail.com',
            //createdAt: new Date().getHours() + '-' + new Date().getMinutes() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
        },
    ];

    findCustomerbyId(id: number) {
        return this.customers.find(user => user.id === id);
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto);
        return customerDto;

    }
    getAllCustomers() {
        return this.customers;
    }

}
