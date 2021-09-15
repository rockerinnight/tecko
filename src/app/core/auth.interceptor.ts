import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../pages/authentication/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuthenticated()) {
      const token = this.authService.getUser()?.token;
      let authRequest!: HttpRequest<unknown>;
      if (token) {
        authRequest = request.clone({
          headers: new HttpHeaders({
            Authorization: 'Token ' + token,
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          }),
        });
        return next.handle(authRequest);
      }
    }
    return next.handle(request);
  }
}
