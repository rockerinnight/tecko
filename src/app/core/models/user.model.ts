export interface IUser {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: null | string;
  image: null | string;
  token: string;
}