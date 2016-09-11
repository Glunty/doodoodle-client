import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {route as home} from './home/home.path';
import {route as login} from './login/login.path';

export const afterLogInPath = 'after_log_in';
export const afterLogOutPath = 'after_log_out';

export const routing: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    redirectTo: home.home.value.join('.'),
    pathMatch: 'full'
  },
  {
    path: afterLogInPath,
    redirectTo: home.home.value.join('.'),
    pathMatch: 'full'
  },
  {
    path: afterLogOutPath,
    redirectTo: login.login.value.join('.'),
    pathMatch: 'full'
  }
]);
