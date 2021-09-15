import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CONSTANT } from 'src/app/core/constants/constants';
import { IArticleComments } from 'src/app/core/models/article-comments.model';
import { ArticleService } from 'src/app/pages/article/article.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
  @Input() article!: IArticleComments;
  heartOnHover = false;
  commentOnHover = false;
  profileImageOnHover = false;
  onClick = false;

  constructor(private readonly articleService: ArticleService) {}

  ngOnInit(): void {
    if (!this.article?.author?.image)
      this.article.author.image = CONSTANT.URL.DEFAULT_PICTURE;
  }

  toggleDropdown(): void {
    this.onClick = !this.onClick;
  }

  favoriteArticle(articleSlug: string): void {
    this.articleService
      .setFavorite(articleSlug)
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
  }

  unFavoriteArticle(articleSlug: string): void {
    this.articleService
      .setUnFavorite(articleSlug)
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

  openCommentList(article: IArticleComments): void {}
}
