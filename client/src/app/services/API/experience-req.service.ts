import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class ExperienceReqService {

  constructor(private apiService: ApiService) { }
  getExpReq() {
    const expReqURL = environment.sqaServiceUrl + '/api/experiencerequired';
    return this.apiService.get(expReqURL);
  }

}
