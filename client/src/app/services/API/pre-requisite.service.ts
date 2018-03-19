import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class PreRequisiteService {

  constructor(private apiService: ApiService) { }
  getPreRequisite() {
    const preRequisiteURL = environment.sqaServiceUrl + '/api/prerequisitetraining';
    return this.apiService.get(preRequisiteURL);
  }

}
