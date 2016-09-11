import {NgModule} from '@angular/core';

import {RegisterViewComponent} from './register-view.component';
import {routing} from './login.routing';
import {SharedModule} from '../shared/shared.module';
import {LoginViewComponent} from './login-view.component';

@NgModule({
  declarations: [
    LoginViewComponent,
    RegisterViewComponent
  ],
  imports: [
    SharedModule,
    routing
  ]
})
export class LoginModule {
}
