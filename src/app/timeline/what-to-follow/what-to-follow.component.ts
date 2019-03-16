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
  get result() {
    return this._result.asObservable();
  }
  constructor(
    private followService: WhatToFollowService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.refresh().subscribe(res => {
      console.log(res);
    });
  }

  demonstration() {
    const randomOffiset = Math.random() * 500;
    const request = this.http.get(`https://api.github.com/users`);
    const refreshRequest = this.http.get(
      `https://api.github.com/users?since=${randomOffiset}`
    );
    return merge(request, refreshRequest);
  }

  refresh(): Observable<any> {
    const response = this.followService.getWithOffset();
    this._result.next(response);
    this._result.next(null);
    response.subscribe(res => console.log(res));
    return response;
  }
}
