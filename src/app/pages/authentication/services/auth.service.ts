import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CONSTANT } from 'src/app/core/constants/constants';
import { Path } from 'src/app/core/constants/path.enum';
import { IUserLoginRequest } from 'src/app/core/models/user-login-request.model';
import { IUserSignupRequest } from 'src/app/core/models/user-signup-request.model';
import { IUserUpdateRequest } from 'src/app/core/models/user-update-request.model';
import { IUser } from 'src/app/core/models/user.model';
import { IAuthResponse } from 'src/app/core/models/auth-user-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _localUser: IUser | null = null;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  isAuthenticated(): boolean {
    if (!this._localUser) {
      const localUser = localStorage.getItem('user');
      if (localUser != undefined) this._localUser = JSON.parse(localUser);
    }
    return !!this._localUser;
  }

  logUserIn(authUser: IAuthResponse): void {
    const { email, username, bio, image, token } = authUser.user;
    this._localUser = { email, username, bio, image, token };
    localStorage.setItem('user', JSON.stringify(this._localUser));
  }

  logout(): void {
    localStorage.removeItem('user');
    this._localUser = null;
    this.router.navigateByUrl(`/${Path.LogIn}`);
  }

  login(loginDto: IUserLoginRequest): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(
      `${CONSTANT.URL.BASE_API}/${Path.Users}/${Path.LogIn}`,
      loginDto
    );
  }

  signup(signupDto: IUserSignupRequest): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(
      `${CONSTANT.URL.BASE_API}/${Path.Users}`,
      signupDto
    );
  }

  getUser(): IUser | null {
    if (!this._localUser)
      this.http
        .get(`${CONSTANT.URL.BASE_API}/${Path.User}`)
        .pipe(take(1))
        .subscribe((res: any) => {
          this._localUser = res ? res.user : null;
        });
    return this._localUser;
  }

  updateUser(updateDto: IUserUpdateRequest): Observable<any> {
    // Accepted fields: email, username, password, image, bio
    return this.http.put<any>(
      `${CONSTANT.URL.BASE_API}/${Path.User}`,
      updateDto
    );
  }
}
