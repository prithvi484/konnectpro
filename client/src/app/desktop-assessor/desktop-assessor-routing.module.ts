import { AssessmentRequestComponent } from './assessment-request/assessment-request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ViewAssessmentreqComponent } from './view-assessmentrequest/view-assessmentrequest.component';
const routes: Routes = [
	{
		path: '', component: HomeComponent,
		children: [
			{ path: '', component: DashboardComponent },
			{ path: 'view-assessmentrequest', component: ViewAssessmentreqComponent },
			{ path: 'assessment-requests', component: AssessmentRequestComponent}

		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DesktopAssessorRoutingModule { }
