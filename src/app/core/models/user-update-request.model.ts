export interface IUserUpdateRequest {
  user: {
    email?: string;
    username?: string;
    bio?: null | string;
    image?: null | string;
    password?: string;
  };
}
