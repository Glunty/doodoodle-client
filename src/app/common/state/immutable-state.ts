import BehaviorSubject = Rx.BehaviorSubject;
import IDisposable = Rx.IDisposable;
import Observer = Rx.Observer;
import {State} from './state';

export class ImmutableState<T extends {}> extends State<T> {

  public constructor(initialState: T) {
    super(initialState);
  }

  public observe(observer: Observer<T>): IDisposable {
    return this._state.map((state: T) => _.merge({}, state)).subscribe(observer);
  }
}
