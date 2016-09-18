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
export class CircleListItemComponent implements OnInit {

  @Input() public circle: ICircle;
  @Output() public onChange = new EventEmitter<boolean>();
  public members: IUser[];
  public isFriends: boolean = true;
  public isActivities: boolean = false;

  public constructor(private circleService: CircleService,
                     private modalService: NgbModal) {
  }

  public ngOnInit() {
    this.members = this.circleService.getMembers(this.circle);
  }

  public remove() {
    this.circleService.deleteCircle(this.circle.id).subscribe(() => this.onChange.emit(true));
  }

  public removeUser(user: IUser) {
    /*this._manager.removeUser(user);*/
  }

  public showFriends() {
    this.isFriends = true;
    this.isActivities = false;
  }

  public showActivities() {
    this.isFriends = false;
    this.isActivities = true;
  }

  public open(content: TemplateRef<any>) {
    this.modalService.open(content).result.catch(() => true)
  }
}
