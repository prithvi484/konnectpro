
import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Helpers } from './../../helpers';
import { UserData } from '../../models/userData';
import { RoutingService } from '../../services/routing.service';
import { environment } from './../../../environments/environment';
import { ApiService } from './../../services/API/api.service';
import { ValidationService } from '../../services/validation.service';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.component.html',
	styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
	userData: UserData = new UserData();
	userDetailsForm: FormGroup;
	constructor(
		private formBuilder: FormBuilder,
		private routingService: RoutingService,
		private router: Router,
		private apiService: ApiService
	) {
		this.userDetailsForm = this.formBuilder.group(
			{
				'role': ['', Validators.required],
				'firstName': ['', Validators.required],
				'email': ['', [Validators.required, ValidationService.emailValidator]],
				'mobile': ['', Validators.compose([Validators.required,
				Validators.pattern('^[1-9][0-9]*$'), Validators.minLength(10), Validators.maxLength(10)])],
				'aadhar': ['', Validators.compose([Validators.required,
				Validators.pattern('^[1-9][0-9]*$'), Validators.minLength(12), Validators.maxLength(12)])],
				employeeId: ['', Validators.required]

			});
	}

	ngOnInit() {
	}

	saveUser() {
		console.log(this.userData, 'UserData');
		// const logedInUser = this.routingService.decodetoken();
		const userDataApi = environment.userServiceUrl + '/user/' + this.userData.role;
		console.log(userDataApi, 'userDataApi');
		this.apiService.post(userDataApi, this.userData)
			.subscribe(res => {
				alert('Your Data Updated Successfully');
				this.router.navigate(['/']);
			},
			err => {
				console.log('error in saving user registration data');
			});
	}
	goBack() {
		this.router.navigate(['/inspectionagency']);
	}

}


