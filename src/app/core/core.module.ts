import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {UserService} from './auth/user.service';
import {UserState} from './auth/user.state';
import {AuthGuard} from './auth/auth.guard';
import {LoginGuard} from './auth/login.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    UserService, UserState, AuthGuard, LoginGuard
  ]
})
export class CoreModule {

  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
