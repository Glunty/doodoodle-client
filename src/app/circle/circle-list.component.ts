import {Component, OnInit} from '@angular/core';
import {ICircle} from '../api/social/circle.i';
import {CircleService} from './circle.service';

@Component({
  template: require('./circle-list.tpl.html')
})
export class CircleListComponent implements OnInit {
  public circles: ICircle[];
  private allCircles: ICircle[];

  public constructor(private circleService: CircleService) {
  }

  public ngOnInit() {
    this.circleService.getCircles().subscribe((circles) => {
      this.allCircles = circles;
      this.circles = circles;
    });
  }

  public filter(name: string) {
    this.circles = this.allCircles.filter((circle) => circle.name.indexOf(name) !== -1)
  }
}
