import { IAuthor } from "./author.model";

export interface IComment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: IAuthor;
}
