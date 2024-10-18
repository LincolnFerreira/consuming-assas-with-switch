import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssasModule } from './assas/assas.module';
import { ConsumeModule } from './consuming-customer/consuming.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AssasModule, ConsumeModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
