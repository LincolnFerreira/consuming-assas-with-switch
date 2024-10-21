import { Controller, Get, UseInterceptors, Query } from '@nestjs/common';
import { AssasInterceptor } from '../../assas.interceptor';
import { PaymentService } from './payment.service';

@Controller('customer')
@UseInterceptors(AssasInterceptor)
export class PaymentController {
  constructor(private readonly customerService: PaymentService) { }

  @Get()
  async findAll(@Query('subAccount') subAccount: string): Promise<any> {
    return await this.customerService.getPayments(subAccount);
  }
}
