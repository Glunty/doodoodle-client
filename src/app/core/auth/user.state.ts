import {State} from '../../shared/state/state';
import {UserInfo} from './user-info.model';
import {IUser} from '../../api/social/user.i';

export class UserState extends State<UserInfo> {

  public constructor() {
    super(new UserInfo());
  }

  public get token() {
    return this.value.token;
  }

  public get user() {
    return this.value.user;
  }

  public set token(header: string) {
    this.value = new UserInfo(header, this.user);
  }

  public set user(user: IUser) {
    this.value = new UserInfo(this.token, user);
  }
}
