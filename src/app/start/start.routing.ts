import {RouterModule} from '@angular/router';
import {RegisterFormComponent} from './register-form.component';
import {ModuleWithProviders} from '@angular/core';
import {LoginGuard} from '../core/auth/login.guard';
import {LoginFormComponent} from './login-form.component';
import {path} from './start.path';
import {StartRootComponent} from './start-root.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: StartRootComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: path.login.value,
        component: LoginFormComponent
      },
      {
        path: path.register.value,
        component: RegisterFormComponent
      }]
  }
]);
