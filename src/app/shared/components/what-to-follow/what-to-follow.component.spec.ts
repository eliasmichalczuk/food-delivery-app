import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToFollowComponent } from './what-to-follow.component';

describe('WhatToFollowComponent', () => {
  let component: WhatToFollowComponent;
  let fixture: ComponentFixture<WhatToFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatToFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatToFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
