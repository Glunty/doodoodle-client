
import BehaviorSubject = Rx.BehaviorSubject;
import Observer = Rx.Observer;
import IDisposable = Rx.IDisposable;
import Immutable = require('immutable');
import List = Immutable.List;
import {ICircle} from '../api/social/circle';

export class CircleListState {

  private _circles: BehaviorSubject<List<ICircle>> = new BehaviorSubject<List<ICircle>>(List<ICircle>());

  public observe(observer: Observer<List<ICircle>>): IDisposable {
    return this._circles.subscribe(observer);
  }

  public addCircle(circle: ICircle) {
    this.circles = this.circles.push(circle);
  }

  public set circles(circles: List<ICircle>) {
    this._circles.onNext(circles);
  }

  public get circles() {
    return this._circles.getValue();
  }

}
