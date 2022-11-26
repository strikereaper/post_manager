import { TestBed } from '@angular/core/testing';

import { SetUrlService } from './set-url.service';

describe('SetUrlService', () => {
  let service: SetUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
