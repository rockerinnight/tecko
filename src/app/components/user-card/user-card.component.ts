import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CONSTANT } from 'src/app/core/constants/constants';
import { IProfileResponse } from 'src/app/core/models/profile-response.model';
import { IProfile } from 'src/app/core/models/profile.model';
import { UserService } from 'src/app/pages/user/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() layout!: string;
  @Input() user!: IProfile;
  onClick = false;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    if (!this.user?.image) this.user.image = CONSTANT.URL.DEFAULT_PICTURE;
  }

  toggleDropdown(): void {
    this.onClick = !this.onClick;
  }

  followUser(username: string): void {
    this.userService
      .followUser(username)
      .pipe(take(1))
      .subscribe(
        (_) => (this.user.following = !this.user.following),
        (e: HttpErrorResponse) => {
          console.log(e);
        }
      );
  }

  unFollowUser(username: string): void {
    this.userService
      .unFollowUser(username)
      .pipe(take(1))
      .subscribe(
        (_) => (this.user.following = !this.user.following),
        (e: HttpErrorResponse) => {
          console.log(e);
        }
      );
  }
}
