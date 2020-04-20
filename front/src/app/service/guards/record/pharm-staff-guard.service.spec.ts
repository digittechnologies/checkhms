import { TestBed } from '@angular/core/testing';

import { PharmStaffGuardService } from './pharm-staff-guard.service';

describe('PharmStaffGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PharmStaffGuardService = TestBed.get(PharmStaffGuardService);
    expect(service).toBeTruthy();
  });
});
