import IComponentOptions = angular.IComponentOptions;
import {CircleListManager, CircleListManagerFactory} from './circle-list.manager';
import {CircleListState} from './circle-list.state';
import {ICircle} from '../api/social/circle';
import Immutable = require('immutable');
import List = Immutable.List;
import {StateObserver} from '../common/state/state-observer';

export class CircleListComponent implements IComponentOptions {
  public template = require('./circle-list.tpl.html');
  public controller = CircleListController;
}

class CircleListController {

  public circleToAdd: string = null;
  public circles: ICircle[];

  private _manager: CircleListManager;
  private _observer: StateObserver<List<ICircle>>;

  /* @ngInject */
  public constructor(ddlCircleListManagerFactory: CircleListManagerFactory) {
    let state = new CircleListState(List<ICircle>());
    this._observer = new StateObserver<List<ICircle>>(state);
    this._manager = ddlCircleListManagerFactory(state);
    this._manager.loadCircles();

    this._observer.onChange((circles: List<ICircle>) => this.circles = circles.toJS());
  }

  public addCircle() {
    this._manager.addCircle(this.circleToAdd).then(() => this.circleToAdd = null);
  }
}
