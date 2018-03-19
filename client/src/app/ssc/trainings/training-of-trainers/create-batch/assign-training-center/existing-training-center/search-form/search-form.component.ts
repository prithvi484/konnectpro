import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from './../../../../../../../models/location';
import { Sector, SubSector, QP } from './../../../../../../../models/sector';
import { ApiService } from './../../../../../../../services/API/api.service';
import { environment } from './../../../../../../../../environments/environment';
import { TrainingCentersService } from './../../../../../../../shared/training-centers.service';
import { GeographiesService } from './../../../../../../../services/API/geographies.service';
import { SectorsService } from './../../../../../../../services/API/sectors.service';
@Component({
	selector: 'app-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

	private location = new Location();
	private sector = new Sector();
	private subSector = new SubSector();
	private QPDetails = new QP();
	public sectors = [];
	public states = [];
	trainingCenterSearchForm: FormGroup;
	public districts = [];
	public jobRoles = [];
	public subSectors = [];
	// tslint:disable-next-line:no-output-on-prefix
	@Output() onSearch = new EventEmitter<boolean>();

	constructor(private fb: FormBuilder,
		private apiService: ApiService,
		private trainingCenterService: TrainingCentersService,
		private geographiesService: GeographiesService,
		private sectorsService: SectorsService
	) {
		this.createForm();
	}
	ngOnInit() {
		this.getStates();
		this.getSectors();
	}

	createForm() {
		this.trainingCenterSearchForm = this.fb.group({
			location: this.fb.group({
				state: [this.location.state, Validators.required],
				district: [this.location.district, Validators.required],
			}),
			sector: [this.sector, Validators.required],
			subSector: [this.subSector, Validators.required],
			jobRole: [this.QPDetails, Validators.required],
			trainingPartnerName: '',
			trainingCenterName: ''
		});
	}

	getStates() {
		this.geographiesService.getStates()
			.subscribe(states => {
				this.states = states['states'];
			}, error => {
				console.log('Error in fetching states : ', error);
			});
	}

	getSectors() {
		this.sectorsService.getSectors().subscribe(sectors => {
			this.sectors = sectors;
		}, error => {
			console.log('Error in fetching states : ', error);
		});
	}

	getDistrictsInTheState() {
		this.districts = [];
		this.geographiesService.getDistricts(this.trainingCenterSearchForm.value.location.state.code)
			.subscribe(districts => {
				this.districts = districts['districts'];
			}, error => {
				console.log(`Error while fetching districts : ${error}`);
			});
	}

	getSubSectors() {
		this.subSectors = [];
		this.jobRoles = [];
		this.sectorsService.getSubSectors(this.trainingCenterSearchForm.value.sector.sectorID).subscribe(subSectors => {
			this.subSectors = subSectors[0]['subSectors'];
		}, error => {
			console.log('Error in fetching states : ', error);
		});
	}

	getJobRoles() {
		this.jobRoles = [];
		this.sectorsService.getSubSectors(this.trainingCenterSearchForm.value.sector.sectorID).subscribe(subSectors => {
			this.jobRoles = subSectors[0]['subSectors'];
		}, error => {
			console.log('Error in fetching states : ', error);
		});
	}

	searchForTrainingCenters() {
		const searchParameters = {
			'location': {
				'state': {
					'name': this.trainingCenterSearchForm.value.location.state.name,
					'id': this.trainingCenterSearchForm.value.location.state.code
				},
				'district': {
					'name': this.trainingCenterSearchForm.value.location.district.name,
					'id': this.trainingCenterSearchForm.value.location.district.code
				}
			},
			'sector': {
				'name': this.trainingCenterSearchForm.value.sector.sector,
				'id': this.trainingCenterSearchForm.value.sector.sectorID
			},
			'subSector': {
				'name': this.trainingCenterSearchForm.value.subSector.qp,
				'id': this.trainingCenterSearchForm.value.subSector.qpRefId
			},
			'jobRole': {
				'QP': this.trainingCenterSearchForm.value.subSector.qp,
				'QPRefId': this.trainingCenterSearchForm.value.subSector.qpRefId
			},
			trainingPartnerName: this.trainingCenterSearchForm.value.trainingPartnerName,
			trainingCenterName: this.trainingCenterSearchForm.value.trainingCenterName
		};
		this.trainingCenterService.trainingCenterSearchCriteria = searchParameters;
		this.onSearch.emit(true);
	}
}
