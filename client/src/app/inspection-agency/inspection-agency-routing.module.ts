import { AssessmentRequestsComponent } from './assessment-requests/assessment-requests.component';

import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: HomeComponent,
		children: [
			{ path: '', component: DashboardComponent },
			{ path: 'create-user', component: CreateUserComponent },
			{ path: 'view-requests', component: AssessmentRequestsComponent }
		]
	},


];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InspectionAgencyRoutingModule { }
