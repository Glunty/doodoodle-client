import {Component} from '@angular/core';
import {UserService} from '../core/auth/user.service';
import {Router} from '@angular/router';
import {afterLogInPath} from '../app.routing';
import {route} from './start.path';

@Component({
  template: require('./login-form.tpl.html')
})
export class LoginFormComponent {
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
