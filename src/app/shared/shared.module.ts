import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ModalOpenDirective} from './modal/modal-open.directive';
import {FocusDirective} from './form/focus';

@NgModule({
  declarations: [
    ModalOpenDirective, FocusDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, FormsModule, ModalOpenDirective, FocusDirective
  ]
})
export class SharedModule {
}
