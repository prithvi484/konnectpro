import { GeographiesService } from './../../services/API/geographies.service';
import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Helpers } from './../../helpers';
import { TCActorsData } from '../../models/tcActorData';
import { RoutingService } from '../../services/routing.service';
import { environment } from './../../../environments/environment';
import { ApiService } from './../../services/API/api.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-create-tc',
  templateUrl: './create-tc.component.html',
  styleUrls: ['./create-tc.component.css']
})
export class CreateTcComponent implements OnInit {
  generalDetailsForm: FormGroup;
  tcActorData: TCActorsData = new TCActorsData();
  constructor(private formBuilder: FormBuilder, private routingService: RoutingService, private apiService: ApiService, private router: Router) {
    this.generalDetailsForm = this.formBuilder.group(
      {
        'nameOfTc': ['', Validators.required],
        'nameOfSpoc': ['', [Validators.required]],
        'address': ['', [Validators.required]],
        'emailOfSpoc': ['', [Validators.required, ValidationService.emailValidator]],
        'mobileOfSpoc': ['', Validators.compose([Validators.required,

        Validators.pattern('^[1-9][0-9]*$'), Validators.minLength(10), Validators.maxLength(10)])]
      }
    );
  }

  ngOnInit() {
  }

  saveTC() {
    console.log("this", this.tcActorData)
    //const userData = this.routingService.decodetoken();

    const tcActorDataApi = environment.userServiceUrl + '/user/Training Centre';
    this.apiService.post(tcActorDataApi, this.tcActorData)
      .subscribe(res => {
        alert('Your Data Updated Successfully');
        this.router.navigate(['/']);
      },
        err => {
          console.log('error in saving tp registration data');
        });
  }

}
