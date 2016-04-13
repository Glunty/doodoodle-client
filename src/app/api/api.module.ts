import {Module} from '../common/module/module';
import {APP_MODULE_NAME} from '../app.module';
import {ChildModule} from '../common/module/child-module';
import {ApiProvider} from './api.service';
import {AuthManager} from './auth.manager';
import {AuthState} from './auth.state';

export const API_MODULE: Module = new ChildModule(APP_MODULE_NAME, 'api', []);

API_MODULE.provider('ddlApi', ApiProvider);

API_MODULE.run(AuthManager.run);

API_MODULE.service('ddlAuthManager', AuthManager);
API_MODULE.service('ddlAuthState', AuthState);
