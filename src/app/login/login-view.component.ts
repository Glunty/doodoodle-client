import {Component} from '@angular/core';
import {UserService} from '../core/auth/user.service';
import {Router} from '@angular/router';
import {afterLogInPath} from '../app.routing';
import {route} from './login.path';

@Component({
  template: require('./login-view.tpl.html')
})
export class LoginViewComponent {
  public username: string;
  public password: string;


  public route = {
    register: ['/', ...route.register.value]
  };

  public constructor(private userService: UserService,
                     private router: Router) {}

  public logIn = () => {
    this.userService.logIn(this.username, this.password).subscribe(() => {
      this.router.navigate([afterLogInPath]);
    });
  };
}
