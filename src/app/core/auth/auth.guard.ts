import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';
import {route} from '../../login/login.path';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(private userService: UserService,
                     private router: Router) {
  }

  public canActivate() {
    if (this.userService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(route.login.value);
      return false;
    }
  }
}
