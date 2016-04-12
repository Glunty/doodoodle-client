import {CircleListState} from './circle-list.state';
import {ApiService} from '../api/api.service';
import {ICircle} from '../api/social/circle';
import Immutable = require('immutable');
import List = Immutable.List;

export class CircleListManager {

  public constructor(private ddlApi: ApiService, private _circles: CircleListState) {

  }

  public addCircle = (name: string) => {
    return this.ddlApi.addCircle(name).then(this.loadCircles);
  };

  public loadCircles = () => {
    this.ddlApi.getCircleList().then((circles: ICircle[]) => this._circles.state = List<ICircle>(circles));
  };

  /* @ngInject */
  public static factory(ddlApi: ApiService) {
    return (state: CircleListState) => new CircleListManager(ddlApi, state);
  }
}

export type CircleListManagerFactory = (state: CircleListState) => CircleListManager;
