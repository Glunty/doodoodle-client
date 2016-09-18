import {Injectable} from '@angular/core';
import {UserState} from './user.state';
import {ApiService} from '../../api/api.service';
import {IUser} from '../../api/social/user.i';
import {Observable} from 'rxjs';

const tokenStorageId = 'ddl.auth.token';
const userStorageId = 'ddl.auth.user';

@Injectable()
export class UserService {

  public constructor(private api: ApiService,
                     private state: UserState) {
  }

  public logIn = (username: string, password: string) => {
    return this.api.auth(username, password).map((response) => {
      this.state.token = response.token;
      localStorage.setItem(tokenStorageId, response.token);
      this.api.authorization = response.token;
      this.state.user = response.user;
      localStorage.setItem(userStorageId, JSON.stringify(response.user));
      return response;
    });
  };

  public logInFromStorage() {
    if (!this.isLoggedIn) {
      this.state.token = localStorage.getItem(tokenStorageId);
      this.state.user = JSON.parse(localStorage.getItem(userStorageId));
      this.api.authorization = this.state.token;
    }
    return this.isLoggedIn;
  }

  public logOut = () => {
    return Observable.of(true)
      .map(() => {
        localStorage.removeItem(userStorageId);
        this.state.user = null;
        this.api.authorization = null;
        localStorage.removeItem(tokenStorageId);
        this.state.token = null;
      });
  };

  public signIn = (user: IUser) => {
    return this.api.addUser(user).flatMap(() => this.logIn(user.email, user.password));
  };

  public isUser = (username: string) => this.state.user.username === username;

  public get isLoggedIn() {
    return !!this.state.token;
  }
}
