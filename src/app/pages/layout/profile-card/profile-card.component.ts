import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() layout!: string;
  onClick = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDropdown(): void {
    this.onClick = !this.onClick;
  }
}
