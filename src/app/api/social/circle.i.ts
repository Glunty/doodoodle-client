import {IUser} from './user.i';

export interface ICircle {
  id?: string;
  name: string;
  members: IUser[];
}
