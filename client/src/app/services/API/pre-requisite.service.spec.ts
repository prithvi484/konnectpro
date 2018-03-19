import { TestBed, inject } from '@angular/core/testing';

import { PreRequisiteService } from './pre-requisite.service';

describe('PreRequisiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreRequisiteService]
    });
  });

  it('should be created', inject([PreRequisiteService], (service: PreRequisiteService) => {
    expect(service).toBeTruthy();
  }));
});
