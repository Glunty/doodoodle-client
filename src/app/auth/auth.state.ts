
import BehaviorSubject = Rx.BehaviorSubject;
import Observer = Rx.Observer;
import IDisposable = Rx.IDisposable;
import {IUser} from '../api/social/user';

export class AuthState {

  private _header: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  // TODO Load authenticated user
  private _user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  public observeAuth(observer: Observer<string>): IDisposable {
    return this._header.subscribe(observer);
  }

  public get isAuth(): boolean {
    return !!this._header.getValue();
  }

  public get header(): string {
    return this._header.getValue();
  }

  public set header(header: string) {
    this._header.onNext(header);
  }

  public get user(): IUser {
    return this._user.getValue();
  }

  public set user(user: IUser) {
    this._user.onNext(user);
  }

}
