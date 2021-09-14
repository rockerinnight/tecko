import { IProfile } from "./profile.model";

export interface IComment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: IProfile;
}
