import {Component, Input} from '@angular/core/src/metadata/directives';
import {CircleService} from './circle.service';
import {ICircle} from '../api/social/circle.i';
import {IUser} from '../api/social/user.i';

@Component({
  selector: 'ddl-circle-edit-modal' ,
  template: require('./circle-edit-modal.tpl.html')
})
export class CircleEditModalDirective {

  @Input() public circle: ICircle;

  @Input() public close: () => void;
  @Input() public dismiss: () => void;

  public user: IUser = {};

  public constructor(private circleService: CircleService) {
  }

  public addUser() {
    this.circleService.addUser(this.circle.id, this.user).subscribe(() => this.close());
  }
}
