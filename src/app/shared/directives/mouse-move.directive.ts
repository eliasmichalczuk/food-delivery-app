import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appMouseMove]'
})
export class MouseMoveDirective implements AfterViewInit {
  @Output() isGradientVisible = new EventEmitter<boolean>();
  @Output() gradientTop = new EventEmitter<number>();
  @Output() gradientLeft = new EventEmitter<number>();
  @Output() gradientRadius = new EventEmitter<number>();

  constructor(public el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.gradientRadius.emit(
      this.el.nativeElement.getBoundingClientRect().width
    );
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isGradientVisible.emit(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isGradientVisible.emit(false);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.gradientTop.emit(event.pageY - this.el.nativeElement.offsetTop);
    this.gradientLeft.emit(event.pageX - this.el.nativeElement.offsetLeft);
  }
}
