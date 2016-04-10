import BehaviorSubject = Rx.BehaviorSubject;
import Observer = Rx.Observer;
import IDisposable = Rx.IDisposable;
import {ICircle} from '../api/social/circle';

export class CircleState {

  private _circle: BehaviorSubject<ICircle>;

  public constructor(circle: ICircle) {
    this._circle = new BehaviorSubject<ICircle>(circle);
  }

  public observe(observer: Observer<ICircle>): IDisposable {
    return this._circle.subscribe(observer);
  }

  public set circle(circle: ICircle) {
    this._circle.onNext(circle);
  }

  public get circle() {
    return this._circle.getValue();
  }

}
