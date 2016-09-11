import { Component } from '@angular/core';
import {UserState} from './core/auth/user.state';
import {UserInfo} from './core/auth/user-info.model';

@Component({
  selector: 'ddl-root',
  template: require('./app.component.html')
})
export class AppComponent {

  public isLoggedIn;

  public constructor(private user: UserState) {

  }

  public ngOnInit() {
    this.user.observe((info: UserInfo) => {
      this.isLoggedIn = info.isLoggedIn;
    })
  }
}
