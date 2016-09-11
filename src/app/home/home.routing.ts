import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthGuard} from '../core/auth/auth.guard';
import {HomeViewComponent} from './home-view.component';
import {path} from './home.path';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: path.home.value,
    component: HomeViewComponent,
    canActivate: [AuthGuard]
  }
]);
