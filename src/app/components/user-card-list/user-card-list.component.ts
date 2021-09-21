import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProfile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.scss'],
})
export class UserCardListComponent implements OnInit, OnDestroy {
  @Input() userListTitle!: string;
  @Input() userCardLayout!: string;
  subject$ = new Subject();
  obsData$!: Observable<IProfile[]>;
  profiles!: IProfile[];

  constructor() {}

  ngOnInit(): void {
    this.obsData$ = of([
      {
        username: 'jakethedog',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: false,
      },
      {
        username: 'jakethedog',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: true,
      },
      {
        username: 'jakethedog',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: false,
      },
      {
        username: 'jakethedog',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: true,
      },
    ]);
    this.obsData$.pipe(takeUntil(this.subject$)).subscribe((res: any) => {
      this.profiles = res;
    });
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}
