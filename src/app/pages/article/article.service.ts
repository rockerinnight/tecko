import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANT } from 'src/app/core/constants/constants';
import { Path } from 'src/app/core/constants/path.enum';
import { IArticleDto } from 'src/app/core/models/articleDto.model';
import { IArticlesDto } from 'src/app/core/models/articlesDto.model';
import { ICommentBodyDto } from 'src/app/core/models/commentBodyDto.model';
import { ICommentDto } from 'src/app/core/models/commentDto.model';
import { ICommentsDto } from 'src/app/core/models/commentsDto.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticlesFeed(offset?: number, limit?: number): Observable<IArticlesDto> {
    return this.http.get<IArticlesDto>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}/${Path.Feed}?${Path.Offset}=${offset}&${Path.Limit}=${limit}`
    );
  }

  getArticlesGlobal(offset?: number, limit?: number): Observable<IArticlesDto> {
    return this.http.get<IArticlesDto>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}?${Path.Offset}=${offset}&${Path.Limit}=${limit}`
    );
  }

  getArticleByTagName(
    tag?: string,
    offset?: number,
    limit?: number
  ): Observable<IArticlesDto> {
    return this.http.get<IArticlesDto>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}?${Path.Offset}=${offset}&${Path.Limit}=${limit}?${Path.Tag}=${tag}`
    );
  }

  getArticleByUser(
    author?: string,
    offset?: number,
    limit?: number
  ): Observable<IArticlesDto> {
    return this.http.get<IArticlesDto>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}?${Path.Offset}=${offset}&${Path.Limit}=${limit}?${Path.Author}=${author}`
    );
  }

  getArticleFavorited(
    favorited?: string,
    offset?: number,
    limit?: number
  ): Observable<IArticlesDto> {
    return this.http.get<IArticlesDto>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}?${Path.Offset}=${offset}&${Path.Limit}=${limit}?${Path.Favorited}=${favorited}`
    );
  }

  setFavorite(slug: string): Observable<IArticleDto> {
    return this.http.post<IArticleDto>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}/${slug}/${Path.Favorite}`,
      null
    );
  }

  setUnFavorite(slug: string): Observable<IArticleDto> {
    return this.http.delete<ArrayBuffer>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}/${slug}/${Path.Favorite}`
    ) as unknown as Observable<IArticleDto>;
  }

  getComments(slug: string): Observable<ICommentsDto> {
    return this.http.get<ICommentsDto>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}/${slug}/${Path.Comments}`
    );
  }

  setComment(slug: string, body: ICommentBodyDto): Observable<ICommentDto> {
    return this.http.post<ICommentDto>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}/${slug}/${Path.Comments}`,
      { comment: { body } }
    );
  }

  deleteComment(slug: string, commentId: number): Observable<any> {
    return this.http.get<any>(
      `${CONSTANT.URL.BASE_API}/${Path.Articles}/${slug}/${Path.Comments}/${commentId}`
    );
  }
}
