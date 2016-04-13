import {AuthManager} from './../api/auth.manager.ts';

export class AuthPanelComponent implements ng.IComponentOptions {
  public template = require('./auth-panel.tpl.html');
  public controller = AuthPanelController;
}

class AuthPanelController {
  private email: string;
  private password: string;

  /* @ngInject */
  public constructor(private ddlAuthManager: AuthManager) {

  }

  public logIn = () => {
    this.ddlAuthManager.logIn(this.email, this.password);
  };
}
