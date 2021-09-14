import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend-item',
  templateUrl: './trend-item.component.html',
  styleUrls: ['./trend-item.component.scss'],
})
export class TrendItemComponent implements OnInit {
  articleCount = 666;
  likeCount = 1000;
  onHover = false;
  onHover2 = false;

  constructor() {}

  ngOnInit(): void {}
}
