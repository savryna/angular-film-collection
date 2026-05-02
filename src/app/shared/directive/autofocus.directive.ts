import type { AfterViewInit } from '@angular/core';
import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  private readonly elementRef = inject(ElementRef);

  public ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
}
