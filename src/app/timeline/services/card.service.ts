import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private httpclient: HttpClient
  ) { }

  getCards(query: string) {
    return this.httpclient.get(environment.connection + '/cards');
  }
}
