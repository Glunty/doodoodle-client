import {Component} from '@angular/core';
import {ICircle} from '../api/social/circle.i';
import {CircleService} from './circle.service';

@Component({
  template: require('./circle-list.tpl.html')
})
export class CircleListComponent {
  public circles: ICircle[];

  public constructor(private circleService: CircleService) {}

  public ngOnInit() {
    this.circleService.getCircles().subscribe((circles) => this.circles = circles);
  }
}
