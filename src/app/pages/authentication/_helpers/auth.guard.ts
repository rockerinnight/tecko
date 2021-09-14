import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Path } from 'src/app/core/constants/path.enum';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  canActivate(): boolean | UrlTree {
    if (!this.authService.isAuthenticated())
      return this.router.parseUrl(`/${Path.Auth}/${Path.LogIn}`);
    return true;
  }
}
