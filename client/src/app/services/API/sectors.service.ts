import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class SectorsService {

	constructor(private apiService: ApiService) { }
	getSectors() {
		const sectorsURL = environment.sqaServiceUrl + '/api/sectors/v1';
		return this.apiService.get(sectorsURL, {
			fields: 'sector,sectorID'
		});
	}
	getSubSectors(sectorID) {
		const subSectorsURL = `${environment.sqaServiceUrl}/api/sectors/subsectors/${sectorID}`;
		return this.apiService.get(subSectorsURL);
	}
}
