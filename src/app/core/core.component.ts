import {AuthState} from '../auth/auth.state';

export class CoreComponent {
  public template = require('./core.tpl.html');
  public controller = CoreController;
  public $routeConfig = [
    {path: '/', name: 'Home', component: 'ddlHomeView', useAsDefault: true},
    {path: '/circles', name: 'Circles', component: 'ddlCirclesView'}];

  /* @ngInject */
  public $canActivate = ($rootRouter: any, ddlAuthState: AuthState) => {
    if (!ddlAuthState.isAuth) {
      $rootRouter.navigate(['Login']);
      return false;
    }
    return true;
  };
}

class CoreController {
}
