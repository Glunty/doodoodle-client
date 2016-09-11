import {RouterModule} from '@angular/router';
import {RegisterViewComponent} from './register-view.component';
import {ModuleWithProviders} from '@angular/core';
import {LoginGuard} from '../core/auth/login.guard';
import {LoginViewComponent} from './login-view.component';
import {path} from './login.path';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: path.login.value,
    component: LoginViewComponent,
    canActivate: [LoginGuard]
  },
  {
    path: path.register.value,
    component: RegisterViewComponent,
    canActivate: [LoginGuard]
  }
]);
