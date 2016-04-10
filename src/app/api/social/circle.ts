import {IUser} from './user';

export interface ICircle {
  id?: string;
  name: string;
  members: IUser[];
}
