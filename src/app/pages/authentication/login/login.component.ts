import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONSTANT } from 'src/app/core/constants/constants';
import { AuthService } from '../services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IUserLoginRequest } from 'src/app/core/models/user-login-request.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAuthResponse } from 'src/app/core/models/auth-user-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private _subject$ = new Subject();
  loginForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['linhdv0209@test.com', [Validators.required]],
      password: ['12345678', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginDto: IUserLoginRequest = {
        user: {
          email: this.loginForm.controls.email.value,
          password: this.loginForm.controls.password.value,
        },
      };

      this.authService
        .login(loginDto)
        .pipe(takeUntil(this._subject$))
        .subscribe(
          (res: IAuthResponse) => {
            this.authService.logUserIn(res);
            this.router.navigateByUrl('/');
          },
          (e: HttpErrorResponse) => {
            if (
              e.error.errors &&
              e.error.errors['email or password'] &&
              e.error.errors['email or password'][0] ===
                CONSTANT.ERROR.RES.INVALID
            ) {
              console.error(
                `Username or Password ${CONSTANT.ERROR.RES.INVALID}!`
              );
            }
          }
        );
    }
  }

  ngOnDestroy(): void {
    this._subject$.next();
    this._subject$.complete();
  }
}
