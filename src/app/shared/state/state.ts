import {BehaviorSubject, Subscription} from 'rxjs';
import {PartialObserver} from 'rxjs/Observer';

export class State<T> {

  protected _subject: BehaviorSubject<T>;

  public constructor(initialState: T) {
    this._subject = new BehaviorSubject<T>(initialState);
  }

  public observe(observerOrNext?: PartialObserver<T> | ((value: T) => void),
                 error?: (error: any) => void,
                 complete?: () => void): Subscription {
    return this._subject.subscribe(observerOrNext, error, complete);
  }

  public get value(): T {
    return this._subject.value;
  }

  public set value(newState: T) {
    this._subject.next(newState);
  }

  public get subject() {
    return this._subject;
  }
}
