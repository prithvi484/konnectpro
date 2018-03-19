import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';
@Injectable()
export class TrainingCentersService {

	constructor(private apiService: ApiService) { }
	searchTrainingCenters(searchCriteria) {
		const searchTrainingCentersURL = `${environment.userServiceUrl}/trainingcentre/all`;
		return this.apiService.post(searchTrainingCentersURL, searchCriteria);
	}
}
