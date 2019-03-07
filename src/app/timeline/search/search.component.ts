import { Component, OnInit, EventEmitter } from '@angular/core';
import { mixinHasStickyInput } from '@angular/cdk/table';
import { empty } from 'rxjs';
import { Event } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  _search = '';

  set search(search: string) {
    if (search === '') {
      this.searchEmitter.emit(search);
    }
    this._search = search;
  }
  searchEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onEnterKey(event: Event) {
    console.log(this.search);
    this.searchEmitter.emit(this.search);
  }

}
