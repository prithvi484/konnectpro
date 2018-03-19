import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { environment } from './../../../environments/environment';
import { ApiService } from './../../services/API/api.service';
import { ScriptLoaderService } from './../../services/script-loader.service';
import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-assessment-requests',
	templateUrl: './assessment-requests.component.html',
	styleUrls: ['./assessment-requests.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class AssessmentRequestsComponent implements OnInit, AfterViewInit {
	ShowTakeAction = false;
	AssessmentRequests: any;
	desktopAssessors: any;
	assignAssessmentForm: FormGroup;
	constructor(
		private _script: ScriptLoaderService,
		private apiSerive: ApiService,
		private formBuilder: FormBuilder
	) {
		this.assignAssessmentForm = this.formBuilder.group({
			// from Validation will come here
		});
	}

	ngOnInit() {
		this.getAssessmentRequest();
		this.getDesktopAssessor();
	}
	ngAfterViewInit() {
		this._script.loadScripts('app-base-sweetalert2',
			['assets/demo/default/custom/components/base/sweetalert2.js']);

	}
	takeAction() {
		this.ShowTakeAction = true;
	}
	getAssessmentRequest() {
		const getAssessmentURL = environment.userServiceUrl + '/tpworkflow';
		this.apiSerive.get(getAssessmentURL)
			.subscribe(
			res => {
				this.AssessmentRequests = res.data;
			},
			err => {
				console.log('error');
			}
			);
	}
	getDesktopAssessor() {
		const desktopAssessorURL = environment.userServiceUrl + '/user/desktopassessor';
		this.apiSerive.get(desktopAssessorURL)
			.subscribe(
			res => {
				if (res) {
					this.desktopAssessors = res;
				}
			},
			err => {
				console.log('error in getting DA');
			}
			);
	}

	assignAssessment() {

	}

}
