import {Injectable} from '@angular/core';
import {UserState} from './user.state';
import {ApiService} from '../../api/api.service';
import {IUser} from '../../api/social/user.i';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  public constructor(private api: ApiService,
                     private state: UserState) {

  }

  public logIn = (email: string, password: string) => {
    return Observable.of({email, password})
      .flatMap(this.getToken)
      .flatMap(this.getUser);
  };

  public logOut = () => {
    return Observable.of(true)
      .map(() => {
        this.state.user = null;
        this.api.authorization = null;
        this.state.token = null;
      });
  };

  public signIn = (user: IUser) => {
    return this.api.addUser(user).map(() => this.logIn(user.email, user.password));
  };

  public getToken = ({email, password}) => {
    return this.api.auth(email, password).map((response) => {
      this.state.token = response.token;
      this.api.authorization = response.token;
      return response;
    });
  };

  public getUser = () => {
    return this.api.getMe().map((response) => {
      this.state.user = response;
    });
  };

  public get isLoggedIn() {
    return !!this.state.token;
  }
}
