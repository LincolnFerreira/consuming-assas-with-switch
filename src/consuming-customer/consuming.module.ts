import { Module } from '@nestjs/common';
import { ConsumeController } from './consuming.controller';
import { CustomerModule } from '../assas/customer/customer.module';

@Module({
  imports: [CustomerModule],
  controllers: [ConsumeController],
  providers: [],
  exports: [],
})
export class ConsumeModule {}
