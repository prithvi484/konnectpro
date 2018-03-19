import { SharedModule } from '../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectionAgencyRoutingModule } from './inspection-agency-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AssessmentRequestsComponent } from './assessment-requests/assessment-requests.component';

@NgModule({
	imports: [
		CommonModule,
		InspectionAgencyRoutingModule,
		SharedModule
	],
	declarations: [HomeComponent, DashboardComponent, CreateUserComponent, AssessmentRequestsComponent]
})
export class InspectionAgencyModule { }
