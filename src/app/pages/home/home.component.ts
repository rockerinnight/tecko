import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  focusMsg!: string;
  focusOutMsg!: string;
  userData!: IProfile;

  constructor() {}

  ngOnInit(): void {
    this.userData = {
      username: 'jakethedog',
      bio: 'I work at statefarm',
      image: 'https://i.stack.imgur.com/xHWG8.jpg',
      following: false,
    };
  }

  msgCatcher(e: string): void {
    if (e) this.focusMsg = e;
  }
}
