import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from 'src/app/dto/card.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit {

  constructor() { }

  breakpoint: number;
  @Input() cards: Array<Card> = [];

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 890) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 890) ? 1 : 2;
  }
  
  drop(event: CdkDragDrop<Card[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

}
