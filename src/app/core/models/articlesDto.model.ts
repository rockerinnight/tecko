import { IArticle } from './article.model';

export interface IArticlesDto {
  articles: IArticle[];
  articlesCount: number;
}
