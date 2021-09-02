import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ErrorResponse } from 'src/app/core/constants/constants';
import { ISignUpDto } from 'src/app/core/models/signupDto.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  private _subject$ = new Subject();
  signupForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: [
        'linhdv0209',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      email: ['linhdv0209@test.com', [Validators.required]],
      password: ['12345678', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const signupDto: ISignUpDto = {
        user: {
          username: this.signupForm.controls.username.value,
          email: this.signupForm.controls.email.value,
          password: this.signupForm.controls.password.value,
        },
      };

      this.authService
        .signup(signupDto)
        .pipe(takeUntil(this._subject$))
        .subscribe(
          (res: any) => {
            console.log(res);
            this.authService.logUserIn(res.user);
          },
          (e: HttpErrorResponse) => {
            console.log(e);
            if (e.error.errors) {
              if (e.error.errors.username) {
                if (e.error.errors.username[0] === ErrorResponse.isTaken)
                  console.error(`Username ${ErrorResponse.isTaken}!`);
                if (e.error.errors.username[0] === ErrorResponse.isInvalid) {
                  console.error(`Username ${ErrorResponse.isInvalid}!`);
                }
              }
              if (e.error.errors.email) {
                if (e.error.errors.email[0] === ErrorResponse.isTaken)
                  console.error(`Email ${ErrorResponse.isTaken}!`);
                if (e.error.errors.email[0] === ErrorResponse.isInvalid)
                  console.error(`Email ${ErrorResponse.isInvalid}!`);
              }
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
