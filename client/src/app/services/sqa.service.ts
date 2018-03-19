import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { ApiService } from './API/api.service';

@Injectable()
export class SqaService {

	constructor(
		private apiService: ApiService
	) { }

  saveNOS(NOSData) {
    const createNOSUrl = environment.sqaServiceUrl + '/api/nos';
    return this.apiService.post(createNOSUrl, NOSData);
  }

  saveQP(QPData) {
    const createQPUrl = environment.sqaServiceUrl + '/api/qp';
    return this.apiService.post(createQPUrl, QPData);
  }
}
