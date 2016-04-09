import {AuthState} from '../auth/auth.state';
import IComponentOptions = angular.IComponentOptions;

export class HomeViewComponent implements IComponentOptions {
  public template = require('./home-view.tpl.html');
  public controller = HomeViewController;

  /* @ngInject */
  public $canActivate = ($rootRouter: any, ddlAuthState: AuthState) => {
    if (!ddlAuthState.isAuth) {
      $rootRouter.navigate(['Login']);
      return false;
    }
    return true;
  };
}

class HomeViewController {

  public constructor() {
  }
}
