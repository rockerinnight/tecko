import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() layout!: string;
  @Input() profile!: IProfile;
  onClick = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDropdown(): void {
    this.onClick = !this.onClick;
  }
}
