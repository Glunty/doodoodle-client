import {CircleState} from './circle.state';
import {ApiService} from '../api/api.service';
import {IUser} from '../api/social/user';
import {ICircle} from '../api/social/circle';

export class CircleManager {

  public constructor(private ddlApi: ApiService, private _state: CircleState) {

  }

  /* @ngInject */
  public static factory(ddlApi: ApiService) {
    return (state: CircleState) => new CircleManager(ddlApi, state);
  }

  public load = () => {
    return this.ddlApi.getCircle(this._state.circle.id).then((circle: ICircle) => this._state.circle = circle);
  };

  public remove = () => {
    return this.ddlApi.removeCircle(this._state.circle.id);
  };

  public addUser = (user: IUser) => {
    return this.ddlApi.addUserToCircle(this._state.circle.id, user).then(this.load);
  };

  public removeUser = (user: IUser) => {
    return this.ddlApi.removeUserToCircle(this._state.circle.id, user).then(this.load);
  };
}

export type CircleManagerFactory = (state: CircleState) => CircleManager;
