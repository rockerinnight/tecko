import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { finalize, take, takeUntil } from 'rxjs/operators';
import { IArticle } from 'src/app/core/models/article.model';
import { IArticlesDto } from 'src/app/core/models/articlesDto.model';
import { ArticleService } from '../../article/article.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IArticleComments } from 'src/app/core/models/article-comments.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  private _subject$ = new Subject();
  offset = 5;
  @Input() articleCommentsList!: IArticleComments[];

  constructor(
    private readonly articleService: ArticleService,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  onScroll(): void {
    // this.spinner.show();
    // merge(
    //   this.articleService.getArticlesFeed(this.offset, 5),
    //   this.articleService.getArticlesGlobal(this.offset, 5)
    // )
    //   .pipe(
    //     takeUntil(this._subject$),
    //     finalize(() => this.spinner.hide())
    //   )
    //   .subscribe(
    //     (articles: IArticlesDto) => {
    //       this.articleList.push(...articles.articles);
    //     },
    //     (e: HttpErrorResponse) => {
    //       console.log(e);
    //     }
    //   );
    // this.offset += 5;
  }

  ngOnDestroy(): void {
    this._subject$.next();
    this._subject$.complete();
  }

  hoverLog(): void {
    console.log(this.articleCommentsList);
  }
}
