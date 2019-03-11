import { Directive, HostListener, HostBinding } from '@angular/core';
import { DraggableRxDirective } from './draggable-rx.directive';
import { DraggableDirective } from './draggable.directive';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Position } from '../position.interface';

@Directive({
  selector: '[appMovable]'
})
export class MovableDirective extends DraggableDirective{

  @HostBinding('style.transform') get transform(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `translatex(${this.position.x}px) translateY(${this.position.y}px`);
  }

  private position: Position = {x: 0, y: 0};
  private startPosition: Position;

  constructor(private sanitizer: DomSanitizer) {
    super();
  }

  @HostListener('dragStart', ['$event'])
  onDragStart(event: PointerEvent) {
    this.startPosition = {
      x: event.clientX - this.position.x,
      y: event.clientY - this.position.y
    };
    console.log('star');
  }

  @HostListener('dragMove', ['$event'])
  onDragMove(event: PointerEvent) {
    this.position = {
      x: event.clientX - this.startPosition.x,
      y: event.clientY - this.startPosition.y
    };
    console.log('move');
  }

  @HostListener('dragEnd', ['$event'])
  onDragEnd(event: PointerEvent) {
    console.log('end');
  }

}

  // option to listen to events
  // ngOnInit() {
  //   this.draggable.dragStart.subscribe(() => this.onDragStart());
  // }

  // private onDragStart() {
  //   console.log('start moving');
  // }