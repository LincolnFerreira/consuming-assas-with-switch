import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AssasService {
  private tokens = {
    SIMULATE:
      '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNTg2MTM6OiRhYWNoX2FhODViYzEyLTIxNjAtNGRkMi04ZGI5LTI2ODM3ZDEyYzA4OQ==',
    REALITY:
      '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAzNzY1NDY6OiRhYWNoXzQyZmVmOGQ0LTMxOTUtNGM0YS04YmJkLTJiOWM3YWRlMGIyZQ==',
    EVOCLUB_SIMULATE:
      '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwOTIyMjY6OiRhYWNoXzZiYjY3ZjQ0LTk4YjAtNDQxNi05ZGVmLTQ1ZTc5MDFkZGRmNQ==',
    EVOCLUB_REALITY:
      '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDA0OTA5NTI6OiRhYWNoXzVmODVmYjBiLTMzZjYtNGRlYi04YWY2LTRkZjE1MzI2NDM5Mw=='
  };

  private baseUrls = {
    SIMULATE: 'https://sandbox.asaas.com/api/v3',
    REALITY: 'https://api.asaas.com/v3',
    EVOCLUB_REALITY: 'https://api.asaas.com/v3',
    EVOCLUB_SIMULATE: 'https://sandbox.asaas.com/api/v3'
  };

  getToken(subAccount: string): string {
    const token = this.tokens[subAccount];
    if (!token) {
      throw new UnauthorizedException('Invalid sub-account');
    }
    return token;
  }

  getBaseUrl(subAccount: string): string {
    const url = this.baseUrls[subAccount];
    if (!url) {
      throw new UnauthorizedException('Invalid sub-account');
    }
    return url;
  }

  buildUrl(subAccount: string, path: string): string {
    const baseUrl = this.getBaseUrl(subAccount);
    return `${baseUrl}/${path}`;
  }
}
