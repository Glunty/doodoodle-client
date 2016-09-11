import {IUser} from '../../api/social/user.i';

export class UserInfo {

  public constructor(private _token: string = null,
                     private _user: IUser = null) {
  }

  public get token() {
    return this._token;
  }

  public get user() {
    return this._user;
  }

  public get isLoggedIn() {
    return this.token !== null && this.user != null;
  }

  public isUser = (username: string) => {
    return this.user.username === username;
  };

}
