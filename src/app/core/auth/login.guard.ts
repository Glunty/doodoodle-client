import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';
import {route} from '../../home/home.path';

@Injectable()
export class LoginGuard implements CanActivate {
  public constructor(private userService: UserService,
                     private router: Router) {
  }

  public canActivate() {
    if(!this.userService.logInFromStorage()) {
      return true;
    } else {
      this.router.navigate(route.home.value);
      return false;
    }
  }
}
