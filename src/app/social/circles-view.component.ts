import IComponentOptions = angular.IComponentOptions;
import {CircleListManager, CircleListManagerFactory} from './circle-list.manager';
import {CircleListState} from './circle-list.state';
import {ICircle} from '../api/social/circle';
import Immutable = require('immutable');
import List = Immutable.List;

export class CirclesViewComponent implements IComponentOptions {
  public template = require('./circles-view.tpl.html');
  public controller = CirclesViewController;
}

class CirclesViewController {

  public circleToAdd: string = null;
  public circles: ICircle[];

  private manager: CircleListManager;
  private state: CircleListState;

  /* @ngInject */
  public constructor(ddlCircleListManagerFactory: CircleListManagerFactory) {
    this.state = new CircleListState();
    this.manager = ddlCircleListManagerFactory(this.state);
    this.manager.loadCircles();

    this.state.observe(Rx.Observer.create((circles: List<ICircle>) => this.circles = circles.toJS()));
  }

  public addCircle() {
    this.manager.addCircle(this.circleToAdd).then(() => this.circleToAdd = null);
  }
}
