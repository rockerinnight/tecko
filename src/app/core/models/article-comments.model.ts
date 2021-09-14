import { IAuthor } from './author.model';
import { IComment } from './comment.model';

export interface IArticleComments {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IAuthor;
  comments: IComment[];
}
