import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {OpenModalDirective} from './modal/open-modal.directive';

@NgModule({
  declarations: [
    OpenModalDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, FormsModule, OpenModalDirective
  ]
})
export class SharedModule {
}
