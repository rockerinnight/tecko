import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navMenu!: any[];

  constructor() {}

  ngOnInit(): void {
    this.navMenu = [
      {
        title: 'Home',
        icon: 'fa-home',
        path: '/home',
      },
      {
        title: 'Explore',
        icon: 'fa-hashtag',
        path: '/explore',
      },
      {
        title: 'Bookmarks',
        icon: 'fa-bookmark',
        path: '/bookmarks',
      },
      {
        title: 'More',
        icon: 'fa-ellipsis-h',
        path: '/more',
      },
    ];
  }
}
