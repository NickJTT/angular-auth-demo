import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private readonly injector: Injector) {}

  intercept(req: any, next: any) {
    const authService = this.injector.get(AuthService);
    const token = authService.getToken();
    let tokenizedRequest = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    return next.handle(tokenizedRequest);
  }
}
