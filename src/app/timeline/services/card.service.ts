import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private httpclient: HttpClient) {}

  getCardsNoQueryFilter(page: number) {
    return this.httpclient.get(
      environment.connection + '/card?' + '_page=' + `${page}&_limit=10`
    );
  }

  getCardsQueryFilter(page: number, query: string) {
    return this.httpclient.get(
      environment.connection +
        '/card?' +
        '_page=' +
        `${page}&_limit=10?&name_like=${query}`
    );
  }
}
