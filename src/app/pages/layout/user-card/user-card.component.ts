import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() layout!: string;
  onClick = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDropdown(): void {
    this.onClick = !this.onClick;
  }
}
