import { Injectable } from '@nestjs/common';
import { AssasService } from '../../assas.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AssasApiPaths } from '../assas-api-paths';

@Injectable()
export class PaymentService {
  constructor(
    private readonly assasService: AssasService,
    private readonly httpService: HttpService,
  ) {}

  async getPayments(subAccount: string): Promise<any> {
    const token = this.assasService.getToken(subAccount);
    const url = this.assasService.buildUrl(
      subAccount,
      AssasApiPaths.PAYMENTS.BASE,
    );

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: { access_token: token },
        }),
      );
      return response.data;
    } catch (error) {
      return { error: 'Error fetching customers' };
    }
  }
}