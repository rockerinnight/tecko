import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router, UrlTree } from '@angular/router';
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
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl(`/${Path.Auth}/${Path.LogIn}`);
      return false;
    }
    return true;
  }
}
