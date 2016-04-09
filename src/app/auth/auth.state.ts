
import BehaviorSubject = Rx.BehaviorSubject;
import Observer = Rx.Observer;
import IDisposable = Rx.IDisposable;

export class AuthState {

  private _auth: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public observeAuth(observer: Observer<string>): IDisposable {
    return this._auth.subscribe(observer);
  }

  public get isAuth(): boolean {
    return !!this._auth.getValue();
  }

  public set auth(header: string) {
    this._auth.onNext(header);
  }

}
