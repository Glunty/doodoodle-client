import {Directive, EventEmitter} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {HostListener, Input, Output} from '@angular/core/src/metadata/directives';
import {IModalComponent} from './modal.component.i';

@Directive({
  selector: '[modalOpen]'
})
export class ModalOpenDirective {

  @Input('modalOpen') public modal: IModalComponent;
  @Output() public onClose = new EventEmitter<any>();
  @Output() public onDismiss = new EventEmitter<any>();

  public constructor(private modalService: NgbModal) {
  }

  @HostListener('click')
  public onMouseClick() {
    const modalRef = this.modalService.open(this.modal.ref);
    this.modal.close = (result?: any) => modalRef.close(result);
    this.modal.dismiss = (result?: any) => modalRef.dismiss(result);
    modalRef.result.then(
      (close) => this.onClose.emit(close),
      (dismiss) => this.onDismiss.emit(dismiss)
    );
    return false;
  }
}
