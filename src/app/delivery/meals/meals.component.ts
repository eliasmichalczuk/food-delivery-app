import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.sass']
})
export class MealsComponent implements OnInit {
  constructor(private cardService: CardService) {}

  ngOnInit() {}
}
