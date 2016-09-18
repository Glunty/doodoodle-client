
import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {UserService} from '../core/auth/user.service';
import {ICircle} from '../api/social/circle.i';
import {IUser} from '../api/social/user.i';

@Injectable()
export class CircleService {

  public constructor(private api: ApiService, private userService: UserService) {
  }

  public getCircles = () => {
    return this.api.getCircles();
  };

  public addCircle = (name: string) => {
    return this.api.addCircle(name);
  };

  public deleteCircle = (id: string) => {
    return this.api.removeCircle(id);
  };

  public addUser = (circleId: string, user: IUser) => {
    return this.api.addUserToCircle(circleId, user);
  };

  public removeUser = (circleId: string, username: string) => {
    return this.api.removeUserToCircle(circleId, username);
  };

  public getMembers = (circle: ICircle) => {
    return circle.members.filter((member) => !this.userService.isUser(member.username));
  }
}
