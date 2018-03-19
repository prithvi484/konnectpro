import { GeographiesService } from './../../services/API/geographies.service';
import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Helpers } from './../../helpers';
import { TPActorsData } from '../../models/tpActorData';
import { RoutingService } from '../../services/routing.service';
import { environment } from './../../../environments/environment';
import { ApiService } from './../../services/API/api.service';
import { ValidationService } from '../../services/validation.service';



declare var mLayout: any;
@Component({
	selector: 'app-tp-registration',
	templateUrl: './tp-registration.component.html',
	styleUrls: ['./tp-registration.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class TpRegistrationComponent implements OnInit, AfterViewInit {

	generalDetailsForm: FormGroup;
	addressDetailsForm: FormGroup;
	financialDetailsForm: FormGroup;
	authorizedSignatoryForm: FormGroup;
	tpActorData: TPActorsData = new TPActorsData();
	currentForm = 0;
	stateOptions: any = [];
	districtOptions: any = [];
	tehsilOptons: any = [];
	year: number = null;
	yearArr = [];
	yearDate = new Date();
	yearOFEst: number;
	parliamentConstituenciesOptions: any = [];
	selectedState: { code: number, name: string } = { code: null, name: '' };
	selectedDistrict: { code: number, name: string } = { code: null, name: '' };
	selectedTehsil: { code: number, name: string } = { code: null, name: '' };
	addressProof = ['PAN Card', 'Aadhar Card', 'Election Card', 'Rashan Card'];
	tpSideBarTextColor = {
		generalFormColor: '',
		addressFormColor: '',
		financeFormColor: '',
		declarationFormColor: ''
	};
	authSignatory: any[] = [];
	currentFormErrorMessage = '';
	authErrorMessage = '';
	captchErrorMessage = '';
	yearOption = [];

	constructor(
		private formBuilder: FormBuilder,
		private routingService: RoutingService,
		private router: Router,
		private apiService: ApiService,
		private geographyService: GeographiesService
	) {

		this.generalDetailsForm = this.formBuilder.group(
			{
				'nameOfOrganisation': ['', Validators.required],
				'typeOfOrganisation': ['', Validators.required],
				'yearOfEstablishment': ['', [Validators.required]],
				'landLineNumber': ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
				'website': ['', []],
				'nameOfHead': ['', [Validators.required]],
				'emailOfHead': ['', [Validators.required, ValidationService.emailValidator]],
				'mobileOfHead': ['', Validators.compose([Validators.required,
				Validators.pattern('^[1-9][0-9]*$'), Validators.minLength(10), Validators.maxLength(10)])
				]
			}
		);
		this.addressDetailsForm = this.formBuilder.group(
			{
				'addressLine1': ['', [Validators.required]],
				'landmark': ['', [Validators.required]],
				'state': ['', [Validators.required]],
				'pincode': ['', Validators.compose([Validators.required,
				Validators.pattern('^[1-9][0-9]*$'), Validators.minLength(6), Validators.maxLength(6)])],
				'district': ['', [Validators.required]],
				'subDistrict': ['', [Validators.required]],
				'parliamentaryConstituency': ['', [Validators.required]],
				'addressProof': ['', [Validators.required]]

			}
		);

		this.financialDetailsForm = this.formBuilder.group(
			{
				'PAN': ['', [Validators.required]],
				'GST': ['', [Validators.required]],
				'annuvalTurnover1': ['', []],
				'annuvalTurnover2': ['', []],
				'annuvalTurnover3': ['', []],
				// 'CACertificate1': ['', [Validators.required]],
				// 'CACertificate2': ['', [Validators.required]],
				// 'CACertificate3': ['', [Validators.required]],*/
				'aadhar': ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]]
			}
		);

		this.authorizedSignatoryForm = this.formBuilder.group({
			authorizedSignatory: this.formBuilder.array([this.createAuthSignature(Validators.required)])
		});

	}

	createAuthSignature(validator) {
		return this.formBuilder.group({ fullName: ['', [Validators.required]], email: ['', [Validators.required, ValidationService.emailValidator]], mobileNumber: ['', [Validators.required]] });
	}

	addRowsForAuthSign(validator) {
		this.authErrorMessage = '';
		console.log(this.authorizedSignatory.controls[0].valid);
		for (let i = 0; i < this.authorizedSignatory.controls.length; i++) {
			if (!this.authorizedSignatory.controls[i].valid) {
				this.authErrorMessage = 'Please Enter Valid Authorized Signatory Details';
				return false;
			}
		}
		const data = this.createAuthSignature(validator);
		this.authorizedSignatory.push(data);

		console.log(this.authorizedSignatory);
	}

	get authorizedSignatory(): FormArray {
		return this.authorizedSignatoryForm.get('authorizedSignatory') as FormArray;
	}

	ngOnInit() {
		this.getStates();
		this.getCurrentYear();
		console.log(this.generalDetailsForm.value);

	}

	getCurrentYear() {
		this.yearOFEst = Number(this.yearDate.getFullYear());
		console.log(this.yearOFEst);
		for (let i = this.yearOFEst; i > this.yearOFEst - 10; i--) {
			this.yearOption.push(i);
		}
		console.log(this.yearOption);
	}
	ngAfterViewInit() {
		mLayout.initHeader();
		mLayout.initAside();

	}

	save() {

		if (this.currentForm === 0) {
			for (let i = 0; i < this.authorizedSignatory.controls.length; i++) {
				if (!this.authorizedSignatory.controls[i].valid) {
					this.authErrorMessage = 'Please Enter Valid Authorized Signatory Details';
					return false;
				}
			}
		}
		if (this.currentForm >= 0 && this.currentForm < 4) {
			this.currentForm++;
		}

		this.currentFormErrorMessage = '';
		if (this.currentForm === 1 && this.generalDetailsForm.valid) {
			this.tpSideBarTextColor['generalFormColor'] = '#2980b9';
		} else if (this.currentForm === 2 && this.addressDetailsForm.valid) {
			this.tpSideBarTextColor['addressFormColor'] = '#2980b9';
		} else if (this.currentForm === 3 && this.financialDetailsForm.valid) {
			this.tpSideBarTextColor['financeFormColor'] = '#2980b9';
		}
	}

	next() {
		window.scrollTo(0, 0);
		if (this.currentForm === 0 && !this.generalDetailsForm.valid) {
			this.currentFormErrorMessage = 'Please Enter Valid GeneralForm Data';
			return;
		} else if (this.currentForm === 1 && !this.addressDetailsForm.valid) {
			this.currentFormErrorMessage = 'Please Enter Valid Address Form Data';
			return;
		} else if (this.currentForm === 2 && !this.financialDetailsForm.valid) {
			this.currentFormErrorMessage = 'Please Enter Valid Financial Form Data';
			return;
		} else if (this.currentForm === 3 && !this.financialDetailsForm.valid) {
			this.currentFormErrorMessage = 'Please Enter Valid Financial Form Data';
			return;
		} else if (this.currentForm === 4 && !this.financialDetailsForm.valid) {
			this.currentFormErrorMessage = 'Please Enter Valid Financial Form Data';
			return;
		}


		if (this.currentForm < 4) {
			this.currentForm++;
		}

	}

	previous() {
		this.currentFormErrorMessage = '';
		if (this.currentForm !== 0) {
			this.currentForm--;
		}
	}

	getStates() {
		const countryId = null;
		this.geographyService.getStates()
			.subscribe(
				res => {
					console.log(res);
					this.stateOptions = res;
					console.log(this.stateOptions);
				},
				(err) => { }
			);
	}


	getDistrict(state) {
		this.tpActorData.address.state = state.name;
		this.tpActorData.address.stateId = state.code;
		this.geographyService.getDistricts(state.code)
			.subscribe(
				res => {
					this.districtOptions = res;
					// this.getParliamentaryConstituencies(state);
				},
				(err) => { }
			);
	}

	getParliamentaryConstituencies(stateName) {
		const getParliamentaryConstituenciesApi: string = environment.commonServiceApiUrl + '/geography/districts?state=' + stateName;
		this.apiService.get(getParliamentaryConstituenciesApi)
			.subscribe(
				parliamentaryConstituencies => {
					this.parliamentConstituenciesOptions = parliamentaryConstituencies;
				},
				(err) => { }
			);
	}

	getTehsil(district) {
		this.tpActorData.address.districtDetails.district = district.name;
		this.tpActorData.address.districtDetails.districtId = district.code;
		this.geographyService.getTehsil(district.code)
			.subscribe(
				taluk => {
					this.tehsilOptons = taluk;
				},
				(err) => {

				}
			);
	}
	setTehsil(tehsil) {
		this.tpActorData.address.districtDetails.subDistrict = tehsil.name.name;
		this.tpActorData.address.districtDetails.subDistrictId = tehsil.name.code;
	}

	setYear() {
		this.yearArr = [];
		this.year = Number(this.tpActorData.generalDetailsOfTP.yearOfEstablishment);
		for (let i = this.year; i < this.year + 3; i++) {
			console.log(this.yearDate.getFullYear());
			if (i <= this.yearDate.getFullYear()) {
				this.yearArr.push(i);
			}
		}
		console.log(this.yearArr);
	}


	submitTPRegistrationData() {
		this.captchErrorMessage = '';
		let captch = grecaptcha.getResponse();
		if (captch.length == 0) {
			this.captchErrorMessage = 'You cant leave Captcha Code empty'
			return false;
		}
		const userData = this.routingService.decodetoken();
		console.log('state name', this.selectedDistrict.name);
		this.tpActorData.submitForApproval = true;
		this.tpActorData.financial.turnoverDetails[0].year = this.yearArr[0];
		this.tpActorData.financial.turnoverDetails[1].year = this.yearArr[1];
		this.tpActorData.financial.turnoverDetails[2].year = this.yearArr[2];

		const tpActorDataApi = environment.userServiceUrl + '/user/' + userData.role + '/' + userData.userName;
		this.apiService.patch(tpActorDataApi, this.tpActorData)
			.subscribe(res => {
				alert('Your Data Updated Successfully');
				this.currentForm = 4;
			},
				err => {
					console.log('error in saving tp registration data');
				});
	}

}
