import {AuthManager} from './../api/auth.manager.ts';

export class RegisterPanelComponent implements ng.IComponentOptions {
  public template = require('./register-panel.tpl.html');
  public controller = RegisterPanelController;
}

class RegisterPanelController {
  private email: string;
  private password: string;

  /* @ngInject */
  public constructor(private ddlAuthManager: AuthManager) {

  }

  public $onInit() {
    console.log('Hello2');
  }

  public register = () => {
    this.ddlAuthManager.register(this.email, this.password);
  };
}
