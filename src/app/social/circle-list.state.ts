import BehaviorSubject = Rx.BehaviorSubject;
import Observer = Rx.Observer;
import IDisposable = Rx.IDisposable;
import Immutable = require('immutable');
import List = Immutable.List;
import {ICircle} from '../api/social/circle';
import {State} from '../common/state/state';

export class CircleListState extends State<List<ICircle>> {

  public addCircle(circle: ICircle) {
    this.state = this.state.push(circle);
  }

}
