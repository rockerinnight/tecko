import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
  @Input() article!: IArticle;
  onHover = false;

  constructor() {}

  ngOnInit(): void {}
}
