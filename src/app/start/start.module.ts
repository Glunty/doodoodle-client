import {NgModule} from '@angular/core';

import {RegisterFormComponent} from './register-form.component';
import {routing} from './start.routing';
import {SharedModule} from '../shared/shared.module';
import {LoginFormComponent} from './login-form.component';
import {StartRootComponent} from './start-root.component';

@NgModule({
  declarations: [
    StartRootComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    SharedModule,
    routing
  ]
})
export class StartModule {
}
