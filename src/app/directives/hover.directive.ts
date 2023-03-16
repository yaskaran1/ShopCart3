import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') click() {
    window.alert("working in progress ");
  }
}
