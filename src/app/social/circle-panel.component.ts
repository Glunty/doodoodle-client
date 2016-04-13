import IComponentOptions = angular.IComponentOptions;
import {CircleManager, CircleManagerFactory} from './circle.manager';
import {ICircle} from '../api/social/circle';
import {IUser} from '../api/social/user';
import {StateObserver} from '../common/state/state-observer';
import {CircleState} from './circle.state';
import {AuthState} from '../api/auth.state';

export class CirclePanelComponent implements IComponentOptions {
  public bindings: any = {
    _inCircle: '<circle',
    _onRemove: '&'
  };
  public template = require('./circle-panel.tpl.html');
  public controller = CirclePanelController;
}

class CirclePanelController {
  public circle: ICircle;
  public members: IUser[];
  public isFriends: boolean = true;
  public isActivities: boolean = false;

  private _manager: CircleManager;
  private _inCircle: ICircle;
  private _onRemove: any;
  private _observer: StateObserver<ICircle>;

  /* @ngInject */
  public constructor(ddlAuthState: AuthState, ddlCircleManagerFactory: CircleManagerFactory) {
    this._observer = new StateObserver<ICircle>(new CircleState(this._inCircle));
    this._manager = ddlCircleManagerFactory(this._observer.state);
    this._observer.onChange((circle) => {
      this.circle = circle;
      this.members = circle.members.filter((member) => !ddlAuthState.state.isUser(member.email));
    });
  }

  public remove() {
    this._manager.remove().then(this._onRemove);
  }

  public removeUser(user: IUser) {
    this._manager.removeUser(user);
  }

  public showFriends() {
    this.isFriends = true;
    this.isActivities = false;
  }

  public showActivities() {
    this.isFriends = false;
    this.isActivities = true;
  }
}
