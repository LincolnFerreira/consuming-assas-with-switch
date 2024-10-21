import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AssasService {
  private tokens = { 
    SIMULATE: process.env.TOKEN_SIMULATE,
    REALITY: process.env.TOKEN_REALITY,
    EVOCLUB_SIMULATE: process.env.TOKEN_EVOCLUB_SIMULATE,
    EVOCLUB_REALITY: process.env.TOKEN_EVOCLUB_REALITY,
  };

  private baseUrls = {
    SIMULATE: process.env.URL_SIMULATE,
    REALITY: process.env.URL_REALITY,
    EVOCLUB_SIMULATE: process.env.URL_EVOCLUB_SIMULATE,
    EVOCLUB_REALITY: process.env.URL_EVOCLUB_REALITY,
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
