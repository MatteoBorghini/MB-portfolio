import { TestBed } from '@angular/core/testing';

import { PortfolioCoreService } from './portfolio-core.service';

describe('PortfolioCoreService', () => {
  let service: PortfolioCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
