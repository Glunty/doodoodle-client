import {Module} from '../common/utils/module';
import {APP_MODULE_NAME} from '../app.module';
import {ChildModule} from '../common/utils/child-module';
import {ApiProvider} from './api.service';

export const API_MODULE: Module = new ChildModule(APP_MODULE_NAME, 'api', []);

API_MODULE.provider('ddlApi', ApiProvider);
