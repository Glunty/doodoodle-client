import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CircleRootComponent} from './circle-root.component';
import {AuthGuard} from '../core/auth/auth.guard';
import {path} from './circle.path';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: path.circle.value,
    component: CircleRootComponent,
    canActivate: [AuthGuard]
  }
]);
