import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop-test',
  templateUrl: './drag-drop-test.component.html',
  styleUrls: ['./drag-drop-test.component.sass']
})
export class DragDropTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDragStart(): void {
    console.log('got drag start');
  }

  onDragMove(event: PointerEvent): void {
    console.log(` got drag move ${Math.round(event.clientX)}`);
  }

  onDragEnd(): void {
    console.log('got drag end');
  }

}
