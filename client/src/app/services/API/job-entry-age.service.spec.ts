import { TestBed, inject } from '@angular/core/testing';

import { JobEntryAgeService } from './job-entry-age.service';

describe('JobEntryAgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobEntryAgeService]
    });
  });

  it('should be created', inject([JobEntryAgeService], (service: JobEntryAgeService) => {
    expect(service).toBeTruthy();
  }));
});
