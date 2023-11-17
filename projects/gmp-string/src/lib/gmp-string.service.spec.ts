import { TestBed } from '@angular/core/testing';

import { GmpStringService } from './gmp-string.service';

describe('GmpStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpStringService = TestBed.get(GmpStringService);
    expect(service).toBeTruthy();
  });
});
