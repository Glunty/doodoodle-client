import {Component} from '@angular/core';
import {IUser} from '../api/social/user.i';
import {UserService} from '../core/auth/user.service';
import {route} from './start.path';
import {afterLogInPath} from '../app.routing';
import {Router} from '@angular/router';


@Component({
  template: require('./register-form.tpl.html')
})
export class RegisterFormComponent {
  public user: IUser = {};

  public route = {
    login: ['/', ...route.login.value]
  };

  public constructor(private router: Router, private userService: UserService) {
  }

  public signIn = () => {
    this.userService.signIn(this.user).subscribe(() => {
      this.router.navigate([afterLogInPath]);
    });
  };
}
