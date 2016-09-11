import {Component} from '@angular/core';
import {IUser} from '../api/social/user.i';
import {UserService} from '../core/auth/user.service';
import {route} from './login.path';


@Component({
  template: require('./register-view.tpl.html')
})
export class RegisterViewComponent {
  public user: IUser = {};

  public route = {
    login: ['/', ...route.login.value]
  };

  public constructor(private userService: UserService) {
  }

  public signIn = () => {
    this.userService.signIn(this.user);
  };
}
