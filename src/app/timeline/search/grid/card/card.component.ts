import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/dto/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
