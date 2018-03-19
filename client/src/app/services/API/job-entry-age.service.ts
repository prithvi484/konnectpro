import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class JobEntryAgeService {

  constructor(private apiService: ApiService) { }
  getJobEntryAge() {
    const jobEntryURL = environment.sqaServiceUrl + '/api/jobentryage';
    return this.apiService.get(jobEntryURL);
  }

}
