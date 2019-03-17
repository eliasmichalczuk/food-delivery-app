import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appMiddleClick]'
})
export class MiddleClickDirective {
  @Output('middleclick') middleClick = new EventEmitter();

  @HostListener('document:mouseup', ['$event'])
  onMiddleMouseClick(event: MouseEvent): void {
    if (event.which === 2) {
      this.middleClick.emit(event);
    }
  }

  constructor() {}
}
