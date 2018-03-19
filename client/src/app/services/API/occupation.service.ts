import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class OccupationService {

  constructor(private apiService: ApiService) { }
  getOccupation() {
    const occupationURL = environment.sqaServiceUrl + '/api/occupation';
    return this.apiService.get(occupationURL);
  }

}
