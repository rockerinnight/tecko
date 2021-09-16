import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANT } from 'src/app/core/constants/constants';
import { Path } from 'src/app/core/constants/path.enum';
import { IProfileResponse } from 'src/app/core/models/profile-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getProfile(username: string): Observable<IProfileResponse> {
    return this.http.get<IProfileResponse>(
      `${CONSTANT.URL.BASE_API}/${Path.Profiles}/${username}`
    );
  }

  followUser(username: string): Observable<IProfileResponse> {
    return this.http.post<IProfileResponse>(
      `${CONSTANT.URL.BASE_API}/${Path.Profiles}/${username}/${Path.Follow}`,
      null
    );
  }

  unFollowUser(username: string): Observable<IProfileResponse> {
    return this.http.delete<IProfileResponse>(
      `${CONSTANT.URL.BASE_API}/${Path.Profiles}/${username}/${Path.Follow}`
    );
  }
}
