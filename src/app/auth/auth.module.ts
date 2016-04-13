import {AuthPanelComponent} from './auth-panel.component';
import {LoginViewComponent} from './login-view.component';
import {Module} from '../common/module/module';
import {APP_MODULE_NAME} from '../app.module';
import {CORE_MODULE} from '../core/core.module';
import {ChildModule} from '../common/module/child-module';

export const AUTH_MODULE: Module = new ChildModule(APP_MODULE_NAME, 'auth', [
  CORE_MODULE.name
]);

AUTH_MODULE.component('ddlAuthPanel', new AuthPanelComponent());
AUTH_MODULE.component('ddlLoginView', new LoginViewComponent());
