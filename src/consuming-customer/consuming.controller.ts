import { Controller, Get } from '@nestjs/common';
import { CustomerService } from '../assas/customer/customer.service';

@Controller('consume')
export class ConsumeController {
  constructor(private readonly consumerService: CustomerService) {}

  @Get()
  async getData() {
    const response = await this.consumerService.getCustomers('REALITY');
    return response;
  }
}
