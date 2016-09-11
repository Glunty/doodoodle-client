import {Component} from '@angular/core';
import {UserService} from '../core/auth/user.service';
import {Router} from '@angular/router';
import {afterLogOutPath} from '../app.routing';
import {route as homeRoute} from '../home/home.path';
import {route as circleRoute} from '../circle/circle.path';

@Component({
  selector: 'ddl-menu',
  template: require('./menu.tpl.html')
})
export class MenuComponent {

  public route = {
    home: homeRoute.home.value,
    circle: circleRoute.circle.value
  };

  public constructor(private userService: UserService, private router: Router) {

  }

  public ngOnInit() {
  }

  public logOut() {
    this.userService.logOut().subscribe(() => {
      this.router.navigate([afterLogOutPath]);
    });
  }
}
