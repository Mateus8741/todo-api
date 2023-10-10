export interface UserToken {
  user: {
    id: number;
    email: string;
    name: string;
  };
  access_token: string;
}
