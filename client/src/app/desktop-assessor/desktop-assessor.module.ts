import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopAssessorRoutingModule } from './desktop-assessor-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared.module';
import { ViewAssessmentreqComponent } from './view-assessmentrequest/view-assessmentrequest.component';
import { AssessmentRequestComponent } from './assessment-request/assessment-request.component';
@NgModule({
	imports: [
		CommonModule,
		DesktopAssessorRoutingModule,
		SharedModule
	],
	declarations: [HomeComponent, DashboardComponent, ViewAssessmentreqComponent, AssessmentRequestComponent]
})
export class DesktopAssessorModule { }
