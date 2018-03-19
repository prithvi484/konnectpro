import { environment } from './../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoutingService } from './../../services/routing.service';
import { Router } from '@angular/router';
import { StorageService } from './../../services/storage.service';
import { ApiService } from './../../services/API/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	userCredentials: { userName: string, password: string } = { userName: '', password: '' };
	loginForm: FormGroup;

	constructor(
		private apiService: ApiService,
		private storageService: StorageService,
		private router: Router,
		private routingService: RoutingService,
		private formBuilder: FormBuilder
	) {
		this.loginForm = this.formBuilder.group({
			'username': ['', Validators.required],
			'password': ['', Validators.required]
		});
	}

	ngOnInit() {

	}

	doLogin() {
		const loginUrl = environment.userServiceUrl + '/login';
		this.apiService.post(loginUrl, this.userCredentials)
			.subscribe(
			res => {
				if (res) {
					this.storageService.setObject('access_token', res.token);
					this.loginForm.reset();
					const userData = this.routingService.decodetoken();
					if (userData.hasFilledRegistrationInfo === false) {
						const userRole = this.routingService.getRolefromToken();
						this.router.navigate([`user-registration/${userRole}/registration`]);
					} else {
						this.routingService.goToDashboard();
					}
				}
			},
			err => {
				console.log('error in logn');
			}
			);
	}

	forgetPassword() {
		// TO Do
	}
	goToRegistration() {
		this.router.navigate(['/user-registration']);
	}

}
