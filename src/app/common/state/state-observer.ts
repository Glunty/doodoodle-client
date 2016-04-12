import {State} from './state';
import Observer = Rx.Observer;
import Record = Immutable.Record;

export class StateObserver<T> {

  private _state: State<T>;

  public constructor(state: State<T>) {
    this._state = state;
  }

  public onChange(handler: (state: T) => void) {
    this._state.observe(Observer.create(handler));
  }

  public get state() {
    return this._state;
  }
}
