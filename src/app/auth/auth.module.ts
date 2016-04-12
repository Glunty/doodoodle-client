import {AuthPanelComponent} from './auth-panel.component';
import {LoginViewComponent} from './login-view.component';
import {AuthManager} from './auth.manager';
import {AuthState} from './auth.state';
import {Module} from '../common/module/module';
import {APP_MODULE_NAME} from '../app.module';
import {CORE_MODULE} from '../core/core.module';
import {ChildModule} from '../common/module/child-module';

export const AUTH_MODULE: Module = new ChildModule(APP_MODULE_NAME, 'auth', [
  CORE_MODULE.name
]);

AUTH_MODULE.run(AuthManager.run);

AUTH_MODULE.service('ddlAuthManager', AuthManager);
AUTH_MODULE.service('ddlAuthState', AuthState);

AUTH_MODULE.component('ddlAuthPanel', new AuthPanelComponent());
AUTH_MODULE.component('ddlLoginView', new LoginViewComponent());
