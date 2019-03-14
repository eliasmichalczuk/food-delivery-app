import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop/index';
import { Card } from 'src/app/dto/card.interface';
import { RouterOutlet, Router } from '@angular/router';
import { fader, slider } from '../route-animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass'],
  animations: [
    slider
  ]
})
export class TimelineComponent implements OnInit {

  favorites = 0;

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Card[]>) {
    this.favorites++;
    console.log('dropped');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRoute && outlet.activatedRouteData['animation'];
  }

  goToSearch() {
    
  }
}
