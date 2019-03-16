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
  _response: any;
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
    const randomOffset = Math.random() * 500;
    const request = this.http.get(`https://api.github.com/users`);
    const refreshRequest = this.http.get(
      `https://api.github.com/users?since=${randomOffset}`
    );
    return forkJoin(request, refreshRequest);
  }

  refresh() {
    this._response = null;
    this.followService.getWithOffset().subscribe(res => {
      this._response = res;
    });
    // this._result.next(response);
    // this._result.next(null);
    // response.subscribe(res => console.log(res));
  }

  closeOption(index: number) {
    const randomOffset = Math.floor(Math.random() * this._response.length);
    this._response[index] = this._response[randomOffset];
  }
}
