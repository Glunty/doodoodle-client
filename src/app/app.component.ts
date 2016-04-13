import {AuthState, AuthInfo} from './api/auth.state.ts';
import {AuthManager} from './api/auth.manager.ts';

export class AppComponent {
  public template = require('./app.tpl.html');
  public controller = AppController;
  public $routeConfig = [
    {path: '/...', name: 'Core', component: 'ddlCore', useAsDefault: true},
    {path: '/login', name: 'Login', component: 'ddlLoginView'}];
}

class AppController {

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
