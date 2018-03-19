import { TestBed, inject } from '@angular/core/testing';

import { ExperienceReqService } from './experience-req.service';

describe('ExperienceReqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperienceReqService]
    });
  });

  it('should be created', inject([ExperienceReqService], (service: ExperienceReqService) => {
    expect(service).toBeTruthy();
  }));
});
