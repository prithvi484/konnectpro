import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class TotBatchService {

	constructor(private apiService: ApiService) { }
	CreateToTBatch(batchDetails) {
		const createToTBatchURL = `${environment.ToTServiceURL}/api/tot/batch`;
		return this.apiService.post(createToTBatchURL, batchDetails);
	}

}
