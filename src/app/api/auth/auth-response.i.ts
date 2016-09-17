
import {IUser} from '../social/user.i';

export interface IAuthResponse {
  token: string;
  user: IUser;
}
