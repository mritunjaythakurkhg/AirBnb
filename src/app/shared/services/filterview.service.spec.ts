import { TestBed } from '@angular/core/testing';

import { FilterviewService } from './filterview.service';

describe('FilterviewService', () => {
  let service: FilterviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
