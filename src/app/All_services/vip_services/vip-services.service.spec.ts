import { TestBed } from '@angular/core/testing';

import { VipServicesService } from './vip-services.service';

describe('VipServicesService', () => {
  let service: VipServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VipServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
