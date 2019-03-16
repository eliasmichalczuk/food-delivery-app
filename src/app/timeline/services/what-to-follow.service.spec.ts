import { TestBed } from '@angular/core/testing';

import { WhatToFollowService } from './what-to-follow.service';

describe('WhatToFollowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhatToFollowService = TestBed.get(WhatToFollowService);
    expect(service).toBeTruthy();
  });
});
