import {Directive} from '@angular/core/src/metadata/directives';
import {ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective implements AfterViewInit {

  public constructor(private element: ElementRef) {

  }

  public ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }
}
