import { TestBed } from '@angular/core/testing';

import { PharmAdminGuardService } from './pharm-admin-guard.service';

describe('PharmAdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PharmAdminGuardService = TestBed.get(PharmAdminGuardService);
    expect(service).toBeTruthy();
  });
});
