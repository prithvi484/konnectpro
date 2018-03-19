import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';
import { Constants } from './../../shared/constants/constants';

@Injectable()
export class MasterTrainerService {
	constructor(private apiService: ApiService) { }
	getMasterTrainers(pageno: number = 0, limit: number = Constants.RECORDSPERPAGE) {
		const masterTrainerUrl = `${environment.ToTServiceURL}/api/tot/masterTrainer?pageNo=${pageno}&&perPage=${limit}`;
		return this.apiService.get(masterTrainerUrl);
	}
	getMasterTrainer(id) {
		const masterTrainerUrl = `${environment.ToTServiceURL}/api/tot/masterTrainer/${id}`;
		return this.apiService.get(masterTrainerUrl);
	}
}
