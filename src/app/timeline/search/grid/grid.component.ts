import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/dto/card.interface';

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

}
