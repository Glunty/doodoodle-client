import {ChildModule} from '../common/utils/child-module';
import {Module} from '../common/utils/module';
import {APP_MODULE_NAME} from '../app.module';
import {COMMON_MODULE} from '../common/common.module';

export const CORE_MODULE: Module = new ChildModule(APP_MODULE_NAME, 'core', [
  COMMON_MODULE.name
]);

import './core.route';
import './i18n.config';
