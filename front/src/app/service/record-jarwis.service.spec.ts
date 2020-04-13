import { TestBed } from '@angular/core/testing';

import { RecordJarwisService } from './record-jarwis.service';

describe('RecordJarwisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordJarwisService = TestBed.get(RecordJarwisService);
    expect(service).toBeTruthy();
  });
});
