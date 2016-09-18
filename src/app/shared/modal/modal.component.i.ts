
import {TemplateRef} from '@angular/core';

export interface IModalComponent {
  close: (any?) => void;
  dismiss: (any?) => void;
  ref: TemplateRef<any>;
}
