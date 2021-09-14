import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CONSTANT } from 'src/app/core/constants/constants';
import { IArticleComments } from 'src/app/core/models/article-comments.model';
import { IArticle } from 'src/app/core/models/article.model';
import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
  @Input() article!: IArticleComments;
  onHover = false;
  onHover2 = false;
  onClick = false;

  constructor(private readonly articleService: ArticleService) {}

  ngOnInit(): void {
    if (!this.article?.author?.image)
      this.article.author.image = CONSTANT.URL.DEFAULT_PICTURE;
  }

  toggleDropdown(): void {
    this.onClick = !this.onClick;
  }

  reactArticle(article: IArticleComments): void {
    if (!article.favorited) {
      this.articleService
        .setFavorite(article.slug)
        .pipe(take(1))
        .subscribe(
          (_) => {
            this.article.favorited = !this.article.favorited;
            this.article.favoritesCount++;
          },
          (e: HttpErrorResponse) => {
            console.log(e);
          }
        );
    } else {
      this.articleService
        .setUnFavorite(article.slug)
        .pipe(take(1))
        .subscribe(
          (_) => {
            this.article.favorited = !this.article.favorited;
            this.article.favoritesCount--;
          },
          (e: HttpErrorResponse) => {
            console.log(e);
          }
        );
    }
  }

  openCommentList(article: IArticleComments): void {}
}
