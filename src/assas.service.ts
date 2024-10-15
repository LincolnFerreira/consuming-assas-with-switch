import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AssasService {
  private tokens = {
    SIMULATE:
      '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNTg2MTM6OiRhYWNoXzViZjJiMzRmLTU5MDEtNGFjOC1iOGFjLTUwYTIyYWU3NjRjOQ==',
    REALITY:
      '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAzNzY1NDY6OiRhYWNoXzMwMjEyMWUwLTVlNmItNDQyZi1hYjE0LTFkMmZlMTFiZTFmOQ==',
    EVOCLUB:
      '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDA0OTA5NTI6OiRhYWNoX2NjZDc2Yjg0LWU5ZDMtNDM5NS1iYzMzLWIyMzQxY2NlZjY1Ng==',
  };

  private baseUrls = {
    SIMULATE: 'https://sandbox.asaas.com/api/v3',
    REALITY: 'https://api.asaas.com/v3',
    EVOCLUB: 'https://api.asaas.com/v3',
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
