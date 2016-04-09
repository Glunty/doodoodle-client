import {CONFIG} from '../config';
import {Module} from './common/utils/module';

export const APP_MODULE_NAME = CONFIG.APP_MODULE_NAME;

import {COMMON_MODULE} from './common/common.module';
import {CORE_MODULE} from './core/core.module';
import {API_MODULE} from './api/api.module';
import {AUTH_MODULE} from './auth/auth.module';
import {HOME_MODULE} from './home/home.module';
import {AppComponent} from './app.component';

export const APP_MODULE: Module = new Module(APP_MODULE_NAME, [
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngSanitize',
  'ngComponentRouter',
  'pascalprecht.translate',
  'ui.bootstrap',
  'restangular',

  COMMON_MODULE.name,
  CORE_MODULE.name,
  API_MODULE.name,
  AUTH_MODULE.name,
  HOME_MODULE.name,
]);

APP_MODULE.value('$routerRootComponent', 'ddl');
APP_MODULE.component('ddl', new AppComponent());
