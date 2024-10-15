// src/assas/payments/payments.module.ts
import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { AssasService } from '../../assas.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PaymentController],
  providers: [PaymentService, AssasService],
  exports: [PaymentService],
})
export class PaymentModule {}
