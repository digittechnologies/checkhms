import { TestBed } from '@angular/core/testing';

import { RevenueJarwisService } from './revenue-jarwis.service';

describe('RevenueJarwisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevenueJarwisService = TestBed.get(RevenueJarwisService);
    expect(service).toBeTruthy();
  });
});
