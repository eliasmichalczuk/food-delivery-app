import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, Subject, BehaviorSubject } from 'rxjs';
import { WhatToFollowService } from '../services/what-to-follow.service';
import { takeUntil, mergeMap, merge } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-what-to-follow',
  templateUrl: './what-to-follow.component.html',
  styleUrls: ['./what-to-follow.component.sass']
})
export class WhatToFollowComponent implements OnInit {
  _result = new BehaviorSubject<any>(null);
  _response: Observable<any>;
  get result() {
    return this._response;
  }
  constructor(
    private followService: WhatToFollowService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.refresh();
  }

  demonstration() {
    const randomOffiset = Math.random() * 500;
    const request = this.http.get(`https://api.github.com/users`);
    const refreshRequest = this.http.get(
      `https://api.github.com/users?since=${randomOffiset}`
    );
    return forkJoin(request, refreshRequest);
  }

  refresh(): Observable<any> {
    this._response = null;
    const response = this.followService.getWithOffset();
    // this._result.next(response);
    // this._result.next(null);
    // response.subscribe(res => console.log(res));
    this._response = response;
    return response;
  }
}
