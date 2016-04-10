import IComponentOptions = angular.IComponentOptions;
import {CircleManager, CircleManagerFactory} from './circle.manager';
import {ICircle} from '../api/social/circle';
import {CircleState} from './circle.state';
import {IUser} from '../api/social/user';

export class CirclePanelComponent implements IComponentOptions {
  public bindings: any = {
    inCircle: '<circle',
    onRemove: '&'
  };
  public template = require('./circle-panel.tpl.html');
  public controller = CirclePanelController;
}

class CirclePanelController {
  public state: CircleState;
  public circle: ICircle;
  public isFriends: boolean = true;
  public isActivities: boolean = false;

  private manager: CircleManager;
  private inCircle: ICircle;
  private onRemove: any;

  /* @ngInject */
  public constructor(ddlCircleManagerFactory: CircleManagerFactory) {
    this.state = new CircleState(this.inCircle);
    this.manager = ddlCircleManagerFactory(this.state);

    this.state.observe(Rx.Observer.create((circle: ICircle) => this.circle = circle));
  }

  public remove() {
    this.manager.remove().then(this.onRemove);
  }

  public removeUser(user: IUser) {
    this.manager.removeUser(user);
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
