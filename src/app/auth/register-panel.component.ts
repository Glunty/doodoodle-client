import {AuthManager} from './../api/auth.manager.ts';
import {IUser} from '../api/social/user';

export class RegisterPanelComponent implements ng.IComponentOptions {
  public template = require('./register-panel.tpl.html');
  public controller = RegisterPanelController;
}

class RegisterPanelController {
  private user: IUser = {};

  /* @ngInject */
  public constructor(private ddlAuthManager: AuthManager) {

  }

  public register = () => {
    this.ddlAuthManager.register(this.user);
  };
}
