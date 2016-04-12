import {ChildModule} from '../common/module/child-module';
import {Module} from '../common/module/module';
import {APP_MODULE_NAME} from '../app.module';
import {COMMON_MODULE} from '../common/common.module';
import {CoreComponent} from './core.component';

export const CORE_MODULE: Module = new ChildModule(APP_MODULE_NAME, 'core', [
  COMMON_MODULE.name
]);

CORE_MODULE.component('ddlCore', new CoreComponent());
