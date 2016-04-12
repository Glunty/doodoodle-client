import BehaviorSubject = Rx.BehaviorSubject;
import IDisposable = Rx.IDisposable;
import Observer = Rx.Observer;

export class State<T> {

  protected _state: BehaviorSubject<T>;

  public constructor(initialState: T) {
    this._state = new BehaviorSubject<T>(initialState);
  }

  public observe(observer: Observer<T>): IDisposable {
    return this._state.subscribe(observer);
  }

  public get state(): T {
    return this._state.getValue();
  }

  public set state(newState: T) {
    this._state.onNext(newState);
  }
}
