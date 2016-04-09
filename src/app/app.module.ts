import {CONFIG} from '../config';
import {Module} from './common/utils/module';

export const APP_MODULE_NAME = CONFIG.APP_MODULE_NAME;

import {COMMON_MODULE} from './common/common.module';
import {CORE_MODULE} from './core/core.module';

export const APP_MODULE: Module = new Module(APP_MODULE_NAME, [
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngSanitize',
  'pascalprecht.translate',
  'ui.bootstrap',
  'ui.router',

  COMMON_MODULE.name,
  CORE_MODULE.name
]);

