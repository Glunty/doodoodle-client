import BehaviorSubject = Rx.BehaviorSubject;
import Observer = Rx.Observer;
import IDisposable = Rx.IDisposable;
import {IUser} from './social/user';
import {ImmutableState} from '../common/state/immutable-state';

export class AuthInfo {

  public constructor(private _header: string = null, private _user: IUser = null) {
  }

  public get header() {
    return this._header;
  }

  public get user() {
    return this._user;
  }

  public get isLoggedIn() {
    return this.header !== null && this.user != null;
  }

  public isUser = (username: string) => {
    return this.user.username === username;
  };

}

export class AuthState extends ImmutableState<AuthInfo> {

  public constructor() {
    super(new AuthInfo());
  }

  public get header() {
    return this.state.header;
  }

  public get user() {
    return this.state.user;
  }

  public set header(header: string) {
    this.state = new AuthInfo(header, this.user);
  }

  public set user(user: IUser) {
    this.state = new AuthInfo(this.header, user);
  }
}
