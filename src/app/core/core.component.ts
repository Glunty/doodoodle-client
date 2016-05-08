import {AuthState, AuthInfo} from '../api/auth.state.ts';
import {AuthManager} from '../api/auth.manager';

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

  public isAuth = false;

  /* @ngInject */
  public constructor(private ddlAuthState: AuthState, private ddlAuthManager: AuthManager) {
    ddlAuthState.observe(Rx.Observer.create((info: AuthInfo) => {
      this.isAuth = info.isLoggedIn;
    }));
  }

  public logOut = () => {
    this.ddlAuthManager.logOut();
  };
}
