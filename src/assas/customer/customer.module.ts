// consumers/consumers.module.ts

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AssasService } from '../../assas.service';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [HttpModule],
  controllers: [CustomerController],
  providers: [CustomerService, AssasService],
  exports: [CustomerService],
})
export class CustomerModule {}
