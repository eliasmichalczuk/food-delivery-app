import { Component, OnInit, Input, HostBinding, ElementRef, HostListener } from '@angular/core';
import { Card } from 'src/app/dto/card.interface';
import { style, trigger, state, transition, animate } from '@angular/animations';
import { timeout } from 'rxjs/operators';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { slider, slideTo } from 'src/app/timeline/route-animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  animations: [
    trigger('favButton', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.5)',
        color: 'yellow'
      })),
      transition('initial=>final', animate('200ms')),
      transition('final=>initial', animate('200ms 200ms'))
    ]),
    trigger('slider', [
      transition('*=>*', slideTo('right'))
    ])
  ]
})
export class CardComponent {

  @Input() card: Card;


  currentState = 'initial';
  elementPosition = { x: 0, y: 0 };

  constructor(
    private router: Router
  ) { }

  changeState() {
    if (this.currentState === 'final') {
      this.currentState = 'initial';
      return;
    }
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    setTimeout(() => this.changeState(), 200);
  }

  goToSearch() {
    console.log('s')
    this.router.navigate(['/search']);
  }
}
