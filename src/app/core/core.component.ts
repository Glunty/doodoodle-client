import {AuthState} from '../api/auth.state.ts';

export class CoreComponent {
  public template = require('./core.tpl.html');
  public controller = CoreController;
  public $routeConfig = [
    {path: '/', name: 'Home', component: 'ddlHomeView', useAsDefault: true},
    {path: '/circles', name: 'Circles', component: 'ddlCirclesView'},
    {path: '/**', redirectTo: ['Home']}];

  /* @ngInject */
  public $canActivate = ($rootRouter: any, ddlAuthState: AuthState) => {
    if(!ddlAuthState.state.isLoggedIn) {
      $rootRouter.navigate(['Login']);
      return false;
    }
    return true;
  };
}

class CoreController {
}
