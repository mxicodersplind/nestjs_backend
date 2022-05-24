import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer-account';
/* eslint-disable */
/*prettier-disable*/

import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
    controllers: [CustomersController],
    providers: [CustomersService],
})
export class CustomersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidateCustomerMiddleware)
            .exclude({
                path: 'api/customers/create',
                method: RequestMethod.POST,
            })
            .forRoutes(CustomersController)
        consumer.apply(ValidateCustomerAccountMiddleware).forRoutes(CustomersController);

    }


}
