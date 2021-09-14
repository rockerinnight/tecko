export interface IAuthResponse {
  user: {
    id: number;
    createdAt: string;
    updatedAt: string;
    
    email: string;
    username: string;
    bio: null | string;
    image: null | string;
    token: string;
  };
}
