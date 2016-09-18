
import {Component, Output, EventEmitter} from '@angular/core';
import {CircleService} from './circle.service';

@Component({
  selector: 'ddl-circle-add-bar',
  template: require('./circle-add-bar.tpl.html')
})
export class CircleAddBarComponent {

  @Output() public onAdd = new EventEmitter<boolean>();
  @Output() public onChange = new EventEmitter<string>();

  private _circleName: string;

  public constructor(private circleService: CircleService) {}

  public addCircle() {
    this.circleService.addCircle(this._circleName).subscribe(() => {
      this._circleName = null;
      this.onAdd.emit(true);
    });
  }

  public get circleName() {
    return this._circleName;
  }

  public set circleName(name: string) {
    this._circleName = name;
    this.onChange.emit(name);
  }
}
