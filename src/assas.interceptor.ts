import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AssasService } from './assas.service';

@Injectable()
export class AssasInterceptor implements NestInterceptor {
  constructor(private readonly assasService: AssasService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const subAccount = request.query.subAccount;
    if (!subAccount) {
      throw new UnauthorizedException('No sub-account provided');
    }

    const token = this.assasService.getToken(subAccount);
    request.token = token;

    return next.handle();
  }
}
