import {Component, Input} from '@angular/core/src/metadata/directives';
import {CircleService} from './circle.service';
import {ICircle} from '../api/social/circle.i';
import {IUser} from '../api/social/user.i';
import {TemplateRef} from '@angular/core';
import {ViewChild} from '@angular/core/src/metadata/di';
import {IModalComponent} from '../shared/modal/modal.component.i';

@Component({
  selector: 'ddl-circle-edit-modal',
  template: require('./circle-edit-modal.tpl.html')
})
export class CircleEditModalDirective implements IModalComponent {

  @Input() public circle: ICircle;
  @ViewChild(TemplateRef) public ref: TemplateRef<any>;
  public close: (any?) => void;
  public dismiss: (any?) => void;

  public user: IUser = {};

  public constructor(private circleService: CircleService) {
  }

  public addUser() {
    this.circleService.addUser(this.circle.id, this.user).subscribe(() => {
      this.reset();
      this.close();
    });
  }

  public cancel() {
    this.reset();
    this.dismiss();
  }

  private reset() {
    this.user = {};
  }
}
