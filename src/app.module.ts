import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Importar ConfigModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssasModule } from './assas/assas.module';
import { ConsumeModule } from './consuming-customer/consuming.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AssasModule,
    ConsumeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
