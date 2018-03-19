import { TestBed, inject } from '@angular/core/testing';

import { TrainingCentersService } from './training-centers.service';

describe('TrainingCentersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingCentersService]
    });
  });

  it('should be created', inject([TrainingCentersService], (service: TrainingCentersService) => {
    expect(service).toBeTruthy();
  }));
});
