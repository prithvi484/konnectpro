import { TestBed, inject } from '@angular/core/testing';

import { TotBatchService } from './tot-batch.service';

describe('TotBatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotBatchService]
    });
  });

  it('should be created', inject([TotBatchService], (service: TotBatchService) => {
    expect(service).toBeTruthy();
  }));
});
