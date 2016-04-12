import {CONFIG} from '../config';
import {Module} from './common/module/module';

export const APP_MODULE_NAME = CONFIG.APP_MODULE_NAME;

import {COMMON_MODULE} from './common/common.module';
import {CORE_MODULE} from './core/core.module';
import {API_MODULE} from './api/api.module';
import {AUTH_MODULE} from './auth/auth.module';
import {HOME_MODULE} from './home/home.module';
import {AppComponent} from './app.component';
import {SOCIAL_MODULE} from './social/social.module';

export const APP_MODULE: Module = new Module(APP_MODULE_NAME, [
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngSanitize',
  'ngComponentRouter',
  'pascalprecht.translate',
  'ui.bootstrap',
  'restangular',
  'angular-storage',
  'focus-if',

  COMMON_MODULE.name,
  CORE_MODULE.name,
  API_MODULE.name,
  AUTH_MODULE.name,
  HOME_MODULE.name,
  SOCIAL_MODULE.name,
]);

APP_MODULE.value('$routerRootComponent', 'ddl');
APP_MODULE.component('ddl', new AppComponent());
