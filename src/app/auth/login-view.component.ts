import {AuthState} from './../api/auth.state.ts';

export class LoginViewComponent {
  public template = require('./login-view.tpl.html');
  public controller = LoginViewController;

  /* @ngInject */
  public $canActivate = ($rootRouter: any, ddlAuthState: AuthState) => {
    if(ddlAuthState.state.isLoggedIn) {
      $rootRouter.navigate(['Core']);
      return false;
    }
    return true;
  };
}

class LoginViewController {
  public constructor() {
  }
}
