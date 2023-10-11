import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

export interface AuthRequest extends Request {
  user: User;
}

export interface UserToken {
  user: {
    id: number;
    email: string;
    name: string;
  };
  access_token: string;
}
