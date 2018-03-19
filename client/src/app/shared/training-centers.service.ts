import { Injectable } from '@angular/core';
import { TrainingCentersService as TrainingCenterAPIService } from './../services/API/training-centers.service';

@Injectable()
export class TrainingCentersService {
	constructor(private trainingCenterAPIService: TrainingCenterAPIService) { }
	public _trainingCenterSearchCriteria: any;
	public _selectedTrainingCenter: any;

	set trainingCenterSearchCriteria(value: any) {
		this._trainingCenterSearchCriteria = value;
	}

	get trainingCenterSearchCriteria(): any {
		return this._trainingCenterSearchCriteria;
	}

	set selectedTrainingCenter(value: any) {
		this._selectedTrainingCenter = value;
	}
	get selectedTrainingCenter(): any {
		return this._selectedTrainingCenter;
	}
}
