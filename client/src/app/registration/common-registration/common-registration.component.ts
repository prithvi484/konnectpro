import { ValidationService } from '../../services/validation.service';
import { environment } from './../../../environments/environment.prod';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../../services/API/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-common-registration',
	templateUrl: './common-registration.component.html',
	styleUrls: ['./common-registration.component.css']
})
export class CommonRegistrationComponent implements OnInit {

	userDetailsForm: FormGroup;
	otpForm: FormGroup;
	showform = 'registration';
	userAccount: {
		name: string, email: string, phone: { mobile: number, landline: number },
		role: string, password: string, emailOTP: string, mobileOTP: string
	} = { name: '', email: '', phone: { mobile: null, landline: null }, role: '', password: '', emailOTP: '', mobileOTP: '' };

	constructor(
		private apiService: ApiService,
		private router: Router,
		private formBuilder: FormBuilder

	) {
		this.userDetailsForm = this.formBuilder.group({
			'role': ['', [Validators.required]],
			'name': ['', [Validators.required]],
			'email': ['', [Validators.required, ValidationService.emailValidator]],
			'mobile': ['', [Validators.required, Validators.pattern('[1-9]{1}[0-9]{9}'), Validators.maxLength(10), Validators.minLength(10)]]
		});
		this.otpForm = this.formBuilder.group({
			'emailOTP': ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
			'mobileOTP': ['', [Validators.required, Validators.pattern('[0-9]{6}')]]

		});
	}

	ngOnInit() {
	}
	goTOLogin() {
		this.router.navigate(['/']);
	}
	registration() {
		const generateOTPUrl = environment.userServiceUrl + '/reg/generateOTP/Training Partner';
		const OTPData: { 'phoneNumber': number, 'email': string } = {
			'phoneNumber': this.userAccount.phone.mobile,
			'email': this.userAccount.email
		};
		this.apiService.post(generateOTPUrl, OTPData)
			.subscribe(
			res => {
				this.showform = 'otp';
				console.log('otp generated');
			},
			err => {
				console.log('error in generating otp');
			});
	}

	reGenerateOTP() {
		// TO do
		const reGenrateOTPAPI = environment.userServiceUrl;
		const OTPData: { 'phoneNumber': number, 'email': string } = {
			'phoneNumber': this.userAccount.phone.mobile,
			'email': this.userAccount.email
		};
		this.apiService.post(reGenrateOTPAPI, OTPData)
			.subscribe(
			res => {
				this.showform = 'otp';
				console.log('otp generated');
			},
			err => {
				console.log('error in generating otp');
			});
	}
	verifyOTP() {
		// TO  do
		const createTrainingPartnerApi = environment.userServiceUrl + '/user/Training Partner/' + this.userAccount.mobileOTP + '/' + this.userAccount.emailOTP;
		const userAccountData = {
			'role': this.userAccount.role,
			'email': this.userAccount.email,
			'name': this.userAccount.name,
			'phone': {
				'mobile': this.userAccount.phone.mobile,
				'landline': this.userAccount.phone.landline
			}
		};
		console.log(userAccountData);
		this.apiService.post(createTrainingPartnerApi, userAccountData)
			.subscribe(res => {
				console.log('created');
				this.showform = 'success';
			},
			err => {
				console.log('error');
			});
	}
}
