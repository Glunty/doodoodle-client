import {ICircle} from './social/circle.i';
import {IUser} from './social/user.i';
import {Injectable} from '@angular/core';
import {ApiUrl} from './api.url';
import {IAuthResponse} from './auth/auth-response.i';
import {Http, Headers} from '@angular/http';
import {ExtendedHttp} from '../shared/http/extended-http.service';

@Injectable()
export class ApiService {

  private http: ExtendedHttp;

  public constructor(http: Http, private url: ApiUrl) {
    this.http = new ExtendedHttp(http);
  }

  public set authorization(token: String) {
    this.http.default.headers = new Headers({ 'Authorization': token });
  }

  public auth(email: string, password: string) {
    return this.http.post<IAuthResponse>(this.url.auth(), {email, password});
  }

  public getUser(id: string) {
    return this.http.get<IUser>(this.url.user(id));
  }

  public getMe() {
    return this.http.get<IUser>(this.url.users());
  }

  public addUser(user: IUser) {
    return this.http.post<IUser>(this.url.users(), user);
  }

  public findUser(user: IUser) {
    return this.http.post(this.url.userFind(), user).map((users: IUser[]) => users.length ? users[0] : false);
  }

  public getCircles() {
    return this.http.get<ICircle[]>(this.url.groups());
  }

  public getCircle(id: string) {
    return this.http.get<ICircle>(this.url.group(id));
  }

  public removeCircle(id: string) {
    return this.http.delete<ICircle>(this.url.group(id));
  }

  public addCircle(name: string) {
    return this.http.post<ICircle>(this.url.groups(), {
      name, members: []
    });
  }

  public addUserToCircle(id: string, user: IUser) {
    return this.http.post(this.url.groupAddUser(id), user);
  }

  public removeUserToCircle(id: string, user: IUser) {
    return this.http.post(this.url.groupRemoveUser(id), user);
  }
}
