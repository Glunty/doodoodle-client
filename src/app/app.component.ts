import {AuthState} from './auth/auth.state';
import {AuthManager} from './auth/auth.manager';

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
    ddlAuthState.observeAuth(Rx.Observer.create((auth: string) => {
      this.isAuth = !!auth;
    }));
  }

  public logOut = () => {
    this.ddlAuthManager.logOut();
  };
}
