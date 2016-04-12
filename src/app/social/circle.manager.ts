import {CircleState} from './circle.state';
import {ApiService} from '../api/api.service';
import {IUser} from '../api/social/user';
import {ICircle} from '../api/social/circle';

export class CircleManager {

  public constructor(private ddlApi: ApiService, private _circle: CircleState) {

  }

  public load = () => {
    return this.ddlApi.getCircle(this._circle.state.id).then((circle: ICircle) => this._circle.state = circle);
  };

  public remove = () => {
    return this.ddlApi.removeCircle(this._circle.state.id);
  };

  public addUser = (user: IUser) => {
    return this.ddlApi.addUserToCircle(this._circle.state.id, user).then(this.load);
  };

  public removeUser = (user: IUser) => {
    return this.ddlApi.removeUserToCircle(this._circle.state.id, user).then(this.load);
  };

  /* @ngInject */
  public static factory(ddlApi: ApiService) {
    return (state: CircleState) => new CircleManager(ddlApi, state);
  }
}

export type CircleManagerFactory = (state: CircleState) => CircleManager;
