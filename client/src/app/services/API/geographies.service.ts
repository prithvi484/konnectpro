import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class GeographiesService {

	constructor(private apiService: ApiService) { }
	getStates(countryCode = 91) {
		const statesURL = environment.geographyServiceUrl + '/states';
		return this.apiService.get(statesURL, {
			countryId: 91
		});
	}
	getDistricts(stateId: number) {
		const districtsURL = environment.geographyServiceUrl + '/state/districts';
		return this.apiService.get(districtsURL, {
			stateId
		});
	}
	getTehsil(districtId: number) {
		const subDistrictsURL = environment.geographyServiceUrl + '/district/subDistricts';
		return this.apiService.get(subDistrictsURL, {
			districtId
		});
	}

}
