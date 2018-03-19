import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Batch } from './../../../../../models/TOTBatch';
import { Router } from '@angular/router';
import { environment } from './../../../../../../environments/environment';
import { FileService } from './../../../../../services/API/file.service';
import { TrainingCentersService } from './../../../../../shared/training-centers.service';
import { TotBatchService } from './../../../../../services/API/tot-batch.service';
import { ScriptLoaderService } from './../../../../../services/script-loader.service';
@Component({
	selector: 'app-schedule-batch',
	templateUrl: './schedule-batch.component.html',
	styleUrls: ['./schedule-batch.component.css']
})
export class ScheduleBatchComponent implements OnInit, AfterViewInit {
	scheduleBatchForm: FormGroup;
	private batch = new Batch();
	public file = {
		name: 'Choose File'
	};
	hideElement: Boolean = true;
	@ViewChild('fileInput') fileInput: ElementRef;
	constructor(private fb: FormBuilder,
		private router: Router,
		private fileService: FileService,
		private trainingCenterService: TrainingCentersService,
		private totBatchService: TotBatchService,
		private _script: ScriptLoaderService
	) {

	}
	ngOnInit() {
		console.log(`Selected Training center = `, this.trainingCenterService.selectedTrainingCenter);
		this.scheduleBatchForm = this.fb.group({
			startDate: [this.batch.startDate, Validators.required],
			endDate: [this.batch.endDate, Validators.required],
			hours: [this.batch.hours, Validators.required],
			batchSize: [this.batch.batchSize, Validators.required],
			batchDocument: null
		});
	}
	ngAfterViewInit() {
		this._script.loadScripts('app-widgets-bootstrap-datepicker',
			['./assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);

	}
	onFileChange(event) {
		if (event.target.files && event.target.files.length > 0) {
			this.file = event.target.files[0];
			this.scheduleBatchForm.get('batchDocument').setValue(this.file);
		}
	}
	removeFile() {
		this.scheduleBatchForm.get('batchDocument').setValue(null);
	}
	uploadFile() {
		if (this.scheduleBatchForm.get('batchDocument').value) {
			this.getFileUploadCredentials()
				.flatMap((credentials) => {
					return this.fileService.uploadFile(this.scheduleBatchForm.get('batchDocument').value, 'SSC', credentials);
				})
				.subscribe(res => {
					console.log(`After file Upload: S3 response: ${res}`);
					this.scheduleBatchForm.get('batchDocument').setValue({
						name: this.file.name,
						URL: res
					});
				}, error => {
					console.log(`There was an error in getting credentials for file upload : ${error}`);
				});
		}
	}
	getFileUploadCredentials() {
		return this.fileService.getFileUploadCredentials('SSC');
	}
	scheduleBatch() {
		const batchDetails = {
			'startDate': this.scheduleBatchForm.value.startDate,
			'EndDate': this.scheduleBatchForm.value.endDate,
			'hours': this.scheduleBatchForm.value.hours,
			'type': 'ToT',
			'size': this.scheduleBatchForm.value.batchSize,
			'sectorId': this.trainingCenterService.selectedTrainingCenter.sector.id,
			'subSectorId': this.trainingCenterService.selectedTrainingCenter.subSector.id,
			'qpCode': this.trainingCenterService.selectedTrainingCenter.jobRoles[0].qpRefId,
			'assignedTo': [{
				'role': this.trainingCenterService.selectedTrainingCenter.role,
				'id': this.trainingCenterService.selectedTrainingCenter.id
			}],
			'batchDocument': ''
		};
		this.totBatchService.CreateToTBatch(batchDetails)
			.subscribe(res => {
				this.hideElement = false;
			}, error => {
				console.log(`There was error creating the batch ${error}`);
			});
	}
}


