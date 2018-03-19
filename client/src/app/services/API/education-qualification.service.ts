import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class EducationQualificationService {

  constructor(private apiService: ApiService) { }
  getEduQualification() {
    const eduQualURL = environment.sqaServiceUrl + '/api/educationalqualifications';
    return this.apiService.get(eduQualURL);
  }

}
