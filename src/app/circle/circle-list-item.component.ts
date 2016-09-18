import {Component, Output} from '@angular/core/src/metadata/directives';
import {ICircle} from '../api/social/circle.i';
import {Input, EventEmitter, TemplateRef, OnInit} from '@angular/core';
import {IUser} from '../api/social/user.i';
import {CircleService} from './circle.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ddl-circle-item',
  template: require('./circle-list-item.tpl.html')
})
export class CircleListItemComponent {
  @Output() public onChange = new EventEmitter<boolean>();
  public members: IUser[];
  private _circle: ICircle;

  public constructor(private circleService: CircleService,
                     private modalService: NgbModal) {
  }

  public remove() {
    this.circleService.deleteCircle(this.circle.id).subscribe(() => this.onChange.emit(true));
  }

  public removeUser(user: IUser) {
    this.circleService.removeUser(this.circle.id, user.username).subscribe((circle) => this.circle = circle);
  }

  public open(content: TemplateRef<any>) {
    this.modalService.open(content).result.catch(() => true);
  }

  public get circle() {
    return this._circle;
  }

  @Input()
  public set circle(circle: ICircle) {
    this._circle = circle;
    this.members = this.circleService.getMembers(circle);
  }
}
