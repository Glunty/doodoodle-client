import {Injectable} from '@angular/core';

@Injectable()
export class ApiUrl {

  public base = 'http://localhost:9001';

  public auth = () => path(this.base, 'auth');

  public users = () => path(this.base, 'user');
  public user = (id: string) => path(this.users(), id);
  public userFind = () => this.user('find');

  public groups = () => path(this.base, 'group');
  public group = (id: string) => path(this.groups(), id);
  public groupAddUser = (id: string) => path(this.group(id), 'addUser');
  public groupRemoveUser = (id: string) => path(this.group(id), 'removeUser');

}

function path(...values: string[]) {
  return values.join('/');
}