import { TestBed, inject } from '@angular/core/testing';

import { EducationQualificationService } from './education-qualification.service';

describe('EducationQualificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationQualificationService]
    });
  });

  it('should be created', inject([EducationQualificationService], (service: EducationQualificationService) => {
    expect(service).toBeTruthy();
  }));
});
