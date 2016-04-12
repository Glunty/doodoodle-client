import {AuthState} from './auth.state';

export class LoginViewComponent {
  public template = require('./login-view.tpl.html');
  public controller = LoginViewController;

  /* @ngInject */
  public $canActivate = ($rootRouter: any, ddlAuthState: AuthState) => {
    if(ddlAuthState.isAuth) {
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
