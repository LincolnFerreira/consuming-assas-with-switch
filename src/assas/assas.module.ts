import { Module } from '@nestjs/common';
import { AssasService } from '../assas.service';
import { HttpModule } from '@nestjs/axios';
import { CustomerModule } from './customer/customer.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [HttpModule, CustomerModule, PaymentModule],
  providers: [AssasService],
  exports: [AssasService],
})
export class AssasModule {}
