import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/core/constants/path.enum';

@Component({
  selector: 'app-article-new-button',
  templateUrl: './article-new-button.component.html',
  styleUrls: ['./article-new-button.component.scss'],
})
export class ArticleNewButtonComponent implements OnInit {
  @Input() newBtnLayout!: string;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigateToArticleNew(): void {
    this.router.navigateByUrl(`/${Path.Articles}/${Path.New}`);
  }
}
