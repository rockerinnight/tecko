import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CONSTANT } from 'src/app/core/constants/constants';
import { Path } from 'src/app/core/constants/path.enum';
import { ILoginDto } from 'src/app/core/models/loginDto.model';
import { ISignUpDto } from 'src/app/core/models/signupDto.model';
import { IUpdateDto } from 'src/app/core/models/updateDto.model';
import { IUser } from 'src/app/core/models/user.model';
import { IUserDto } from 'src/app/core/models/userDto.model';

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

  logUserIn(userDto: IUserDto): void {
    this._localUser = userDto.user;
    localStorage.setItem('user', JSON.stringify(this._localUser));
  }

  logout(): void {
    localStorage.removeItem('user');
    this._localUser = null;
    this.router.navigateByUrl(`/${Path.LogIn}`);
  }

  login(loginDto: ILoginDto): Observable<IUserDto> {
    return this.http.post<IUserDto>(
      `${CONSTANT.URL.BASE_API}/${Path.Users}/${Path.LogIn}`,
      loginDto
    );
  }

  signup(signupDto: ISignUpDto): Observable<IUserDto> {
    return this.http.post<IUserDto>(
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

  updateUser(updateDto: IUpdateDto): Observable<any> {
    // Accepted fields: email, username, password, image, bio
    return this.http.put<any>(
      `${CONSTANT.URL.BASE_API}/${Path.User}`,
      updateDto
    );
  }
}
