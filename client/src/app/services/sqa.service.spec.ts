import { TestBed, inject } from '@angular/core/testing';

import { SqaService } from './sqa.service';

describe('SqaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SqaService]
    });
  });

  it('should be created', inject([SqaService], (service: SqaService) => {
    expect(service).toBeTruthy();
  }));
});
