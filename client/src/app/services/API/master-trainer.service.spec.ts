import { TestBed, inject } from '@angular/core/testing';

import { MasterTrainerService } from './master-trainer.service';

describe('MasterTrainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterTrainerService]
    });
  });

  it('should be created', inject([MasterTrainerService], (service: MasterTrainerService) => {
    expect(service).toBeTruthy();
  }));
});
