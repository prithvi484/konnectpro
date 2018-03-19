import { TestBed, inject } from '@angular/core/testing';

import { GeographiesService } from './geographies.service';

describe('GeographiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeographiesService]
    });
  });

  it('should be created', inject([GeographiesService], (service: GeographiesService) => {
    expect(service).toBeTruthy();
  }));
});
