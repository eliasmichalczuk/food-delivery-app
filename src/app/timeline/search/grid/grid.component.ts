import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Card } from 'src/app/dto/card.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { slider, componentSlider } from '../../route-animations';
import {
  style,
  trigger,
  state,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass'],
  animations: [
    trigger('moverAnimation', [
      state(
        'initial',
        style({
          position: 'relative',
          right: '-200%',
          opacity: '0%'
        })
      ),
      state(
        'middle',
        style({
          left: '0%',
          opacity: '200%'
        })
      ),
      state(
        'final',
        style({
          opacity: '0%',
          left: '200%'
        })
      ),
      transition('initial=>middle', animate('200ms')),
      transition('middle=>final', animate('200ms')),
      transition('middle=>final', animate('0ms'))
    ])
  ]
})
export class GridComponent implements OnInit, OnChanges {
  constructor() {}

  breakpoint: number;
  @Input() cards: Array<Card> = [];
  @Input() animationState = 'middle';

  ngOnChanges(changes: SimpleChanges) {
    if (this.cards.length) {
      return;
    }
    if (changes.cards) {
      setTimeout(() => {
        this.animationState = 'final';
      }, 200);
      this.animationState = 'initial';
      this.cards = <Array<Card>>(<unknown>changes.cards);
      setTimeout(() => {
        this.animationState = 'middle';
      }, 200);
    }
  }

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 890 ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 890 ? 1 : 2;
  }

  drop(event: CdkDragDrop<Card[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }
}
