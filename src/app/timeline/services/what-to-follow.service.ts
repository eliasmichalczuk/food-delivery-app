import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatToFollowService {
  getWithOffset(): Observable<any> {
    const randomOffiset = Math.random() * 500;
    return this.http.get(`https://api.github.com/users?since=${randomOffiset}`);
  }

  get(): Observable<any> {
    return this.http.get('https://api.github.com/users');
  }

  constructor(private http: HttpClient) {}
}
