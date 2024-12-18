import { TestBed } from '@angular/core/testing';

import { NileServiceService } from './nile-service.service';

describe('NileServiceService', () => {
  let service: NileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
