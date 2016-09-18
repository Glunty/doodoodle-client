import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ModalOpenDirective} from './modal/modal-open.directive';
import {FocusDirective} from './form/focus';
import {ModalConfirmComponent} from './modal/modal-confirm.component';

@NgModule({
  declarations: [
    ModalOpenDirective, ModalConfirmComponent, FocusDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, FormsModule, ModalOpenDirective, ModalConfirmComponent, FocusDirective
  ]
})
export class SharedModule {
}
