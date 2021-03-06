import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  Output,
  Input
} from '@angular/core';
import { mixinHasStickyInput } from '@angular/cdk/table';
import { empty } from 'rxjs';
import { Event } from '@angular/router';
import { Card } from 'src/app/dto/card.interface';
import { FormControl } from '@angular/forms';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  private _query = '';
  private _page = 1;

  change = '';

  cards: Array<Card> = [];
  loading = false;
  foodTypes = new FormControl();
  foodTypeList: string[] = [
    'Comida Brasileira',
    'Comida Árabe',
    'Comida Alemã',
    'Laches',
    'Marmita',
    'Frutos do Mar',
    'Pizza',
    'Panquecas',
    'Pastel',
    'Bebidas'
  ];

  set search(search: string) {
    if (search === '') {
      this.getCardsNoQueryFilter();
    }
    this._query = search;
  }
  searchEmitter = new EventEmitter();

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.loading = true;
    this.getCardsNoQueryFilter();
  }

  getCardsNoQueryFilter() {
    this.cardService
      .getCardsNoQueryFilter(this._page)
      .subscribe((response: Array<Card>) => {
        this.cards = response;
        this.loading = false;
      });
  }

  onEnterKey(event: Event) {
    this.loading = true;
    this.cardService
      .getCardsQueryFilter(this._page, this._query)
      .subscribe((response: Array<Card>) => {
        this.cards = response;
        this.loading = false;
      });
  }

  nextPage() {
    if (this.cards.length < 10) {
      return;
    }
    this._page++;
    this.getCardsNoQueryFilter();
  }

  previousPage() {
    if (this._page === 1) {
      return;
    }
    this._page--;
    this.getCardsNoQueryFilter();
  }
}
