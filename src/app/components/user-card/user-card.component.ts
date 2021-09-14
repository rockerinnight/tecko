import { Component, Input, OnInit } from '@angular/core';
import { CONSTANT } from 'src/app/core/constants/constants';
import { IAuthor } from 'src/app/core/models/author.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() layout!: string;
  @Input() user!: IAuthor;
  onClick = false;

  constructor() {}

  ngOnInit(): void {
    if (!this.user?.image) this.user.image = CONSTANT.URL.DEFAULT_PICTURE;
  }

  toggleDropdown(): void {
    this.onClick = !this.onClick;
  }
}
