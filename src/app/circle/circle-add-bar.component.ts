
import {Component, Output, EventEmitter} from '@angular/core';
import {CircleService} from './circle.service';

@Component({
  selector: 'ddl-circle-add-bar',
  template: require('./circle-add-bar.tpl.html')
})
export class CircleAddBarComponent {

  @Output() public onAdd = new EventEmitter<boolean>();

  public circleName: string;

  public constructor(private circleService: CircleService) {}

  public addCircle() {
    this.circleService.addCircle(this.circleName).subscribe(() => {
      this.circleName = null;
      this.onAdd.emit(true);
    });
  }
}
