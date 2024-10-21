import { Injectable } from '@nestjs/common';
import { AssasService } from '../../assas.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AssasApiPaths } from '../assas-api-paths';

@Injectable()
export class CustomerService {
  constructor(
    private readonly assasService: AssasService,
    private readonly httpService: HttpService,
  ) {}

  async getCustomers(subAccount: string): Promise<any> {
    const token = this.assasService.getToken(subAccount);
    const url = this.assasService.buildUrl(
      subAccount,
      AssasApiPaths.CUSTOMERS.BASE,
    );

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: { access_token: token },
        }),
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error fetching customers: ${error.message}`);
    }
  }

  async getCustomerById(subAccount: string, customerId: string): Promise<any> {
    const token = this.assasService.getToken(subAccount);
    const url = this.assasService.buildUrl(
      subAccount,
      AssasApiPaths.CUSTOMERS.ID(customerId),
    );

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: { access_token: token },
        }),
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error fetching customer by ID: ${error.message}`);
    }
  }

  async getCustomerNotifications(
    subAccount: string,
    customerId: string,
  ): Promise<any> {
    const token = this.assasService.getToken(subAccount);
    const url = this.assasService.buildUrl(
      subAccount,
      AssasApiPaths.CUSTOMERS.NOTIFICATIONS(customerId),
    );

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: { access_token: token },
        }),
      );
      return response.data;
    } catch (error: any) {
      throw new Error(
        `Error fetching customer notifications: ${error.message}`,
      );
    }
  }

  async restoreCustomer(subAccount: string, customerId: string): Promise<any> {
    const token = this.assasService.getToken(subAccount);
    const url = this.assasService.buildUrl(
      subAccount,
      AssasApiPaths.CUSTOMERS.RESTORE(customerId),
    );

    try {
      const response = await firstValueFrom(
        this.httpService.post(
          url,
          {},
          {
            headers: { access_token: token },
          },
        ),
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error restoring customer: ${error.message}`);
    }
  }

  async createCustomer(
    subAccount: string,
    customerData: Partial<any>,
  ): Promise<any> {
    const token = this.assasService.getToken(subAccount);
    const url = this.assasService.buildUrl(
      subAccount,
      AssasApiPaths.CUSTOMERS.BASE,
    );

    try {
      const response = await firstValueFrom(
        this.httpService.post(
          url,
          {},
          {
            headers: { access_token: token },
          },
        ),
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error restoring customer: ${error.message}`);
    }
  }

  async updateCustomer(
    subAccount: string,
    id: string,
    customerData: Partial<any>,
  ): Promise<any> {
    const token = this.assasService.getToken(subAccount);
    const url = this.assasService.buildUrl(
      subAccount,
      AssasApiPaths.CUSTOMERS.BASE,
    );

    try {
      const response = await firstValueFrom(
        this.httpService.post(
          url,
          {},
          {
            headers: { access_token: token },
          },
        ),
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error restoring customer: ${error.message}`);
    }
  }
}