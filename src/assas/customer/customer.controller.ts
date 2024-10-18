import { Controller, Get, Query, Body, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { AssasInterceptor } from '../../assas.interceptor';

@Controller('customer')
@UseInterceptors(AssasInterceptor)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  // Obter todos os clientes
  @Get()
  async getCustomers(@Query('subAccount') subAccount: string): Promise<any> {
    return this.customerService.getCustomers(subAccount);
  }

  // Obter um cliente por ID
  @Get(':id')
  async getCustomerById(
    @Query('subAccount') subAccount: string,
    @Param('id') id: string,
  ): Promise<any> {
    return this.customerService.getCustomerById(subAccount, id);
  }

  // Obter notificações de um cliente
  @Get(':id/notifications')
  async getCustomerNotifications(
    @Query('subAccount') subAccount: string,
    @Param('id') id: string,
  ): Promise<any> {
    return this.customerService.getCustomerNotifications(subAccount, id);
  }

  // Adicionar um novo cliente (a implementação do método pode ser ajustada conforme necessário)
  @Post()
  async createCustomer(
    @Query('subAccount') subAccount: string,
    @Body() customerData: Partial<any>,
  ): Promise<any> {
    // Implemente a lógica para criar um cliente no CustomerService
    // Isso pode incluir a chamada a um método no serviço que faz uma requisição POST
    return this.customerService.createCustomer(subAccount, customerData);
  }

  // Atualizar um cliente existente
  @Put(':id')
  async updateCustomer(
    @Query('subAccount') subAccount: string,
    @Param('id') id: string,
    @Body() customerData: Partial<any>,
  ): Promise<any> {
    // Implemente a lógica para atualizar um cliente no CustomerService
    return this.customerService.updateCustomer(subAccount, id, customerData);
  }

  // Restaurar um cliente (se aplicável)
  @Put(':id/restore')
  async restoreCustomer(
    @Query('subAccount') subAccount: string,
    @Param('id') id: string,
  ): Promise<any> {
    // Implemente a lógica para restaurar um cliente no CustomerService
    return this.customerService.restoreCustomer(subAccount, id);
  }
}
