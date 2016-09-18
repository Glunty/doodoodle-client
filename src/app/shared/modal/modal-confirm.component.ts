import {Component, TemplateRef} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {IModalComponent} from './modal.component.i';
import {ViewChild} from '@angular/core/src/metadata/di';

@Component({
  selector: 'modal-confirm',
  template: require('./modal-confirm.tpl.html')
})
export class ModalConfirmComponent implements IModalComponent {
  @Input() public title: string;
  @Input() public content: string;
  @ViewChild(TemplateRef) public ref: TemplateRef<any>;
  public close: (any?) => void;
  public dismiss: (any?) => void;

  public constructor() {
  }
}
