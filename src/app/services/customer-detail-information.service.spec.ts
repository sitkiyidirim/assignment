import { TestBed } from '@angular/core/testing';

import { CustomerDetailInformationService } from './customer-detail-information.service';

describe('CustomerDetailInformationService', () => {
  let service: CustomerDetailInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDetailInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
