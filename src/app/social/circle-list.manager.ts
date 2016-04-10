import {CircleListState} from './circle-list.state';
import {ApiService} from '../api/api.service';
import {ICircle} from '../api/social/circle';
import Immutable = require('immutable');
import List = Immutable.List;

export class CircleListManager {

  public constructor(private ddlApi: ApiService, private _state: CircleListState) {

  }

  /* @ngInject */
  public static factory(ddlApi: ApiService) {
    return (state: CircleListState) => new CircleListManager(ddlApi, state);
  }

  public addCircle = (name: string) => {
    return this.ddlApi.addCircle(name).then(this.loadCircles);
  };

  public loadCircles = () => {
    this.ddlApi.getCircleList().then((circles: ICircle[]) => this._state.circles = List<ICircle>(circles));
  };
}

export type CircleListManagerFactory = (state: CircleListState) => CircleListManager;
