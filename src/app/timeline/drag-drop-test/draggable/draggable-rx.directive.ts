import { Directive, HostBinding, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, repeat, take } from 'rxjs/operators';

@Directive({
  selector: '[appDraggableRx]'
})
export class DraggableRxDirective implements OnInit {
  @HostBinding('class.draggable') draggable = true;
  @HostBinding('class.dragging') dragging = true;

  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  private pointerDownSubject = new Subject<PointerEvent>();
  private pointerMoveSubject = new Subject<PointerEvent>();
  private pointerUpSubject = new Subject<PointerEvent>();

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    this.pointerDownSubject.next(event);
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    this.pointerMoveSubject.next(event);
  }
  
  @HostListener('document:pointerup', ['$event'])
  onPointerUp(event: PointerEvent): void {
    this.pointerUpSubject.next(event);
  }
  ngOnInit(): void {
    // stream of dragStart
    // elementRef could be used
    this.pointerDownSubject.asObservable()
      .subscribe(event => {
        this.dragging = true;
        this.dragStart.emit(event);
      });
    // dragStart$.subscribe(() => console.log('got a drag start'));

    this.pointerDownSubject.pipe(
      switchMap(() => this.pointerMoveSubject),
      takeUntil(this.pointerUpSubject),
      repeat()
    ).subscribe(event => this.dragMove.emit(event));
    
    this.pointerDownSubject.pipe(
      switchMap(() => this.pointerUpSubject
      .pipe(take(1)))
    ).subscribe(event => {
      this.dragging = false;
      this.dragEnd.emit(event);
    });
  }
}
