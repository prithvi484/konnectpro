import { LoginComponent } from './common/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', redirectTo: '/', pathMatch: 'full' },
			{ path: '', component: LoginComponent },
			{ path: 'ssc', loadChildren: 'app/ssc/ssc.module#SSCModule' },
			{ path: 'nsdcsu', loadChildren: 'app/super-admin/super-admin.module#SuperAdminModule' },
			{ path: 'nsdcadmin', loadChildren: 'app/nsdcadmin/nsdcadmin.module#NsdcadminModule' },
			{
				path: 'inspectionagencyadmin',
				loadChildren: 'app/inspection-agency-admin/inspection-agency-admin.module#InspectionAgencyAdminModule'
			},
			{ path: 'inspectionagency', loadChildren: 'app/inspection-agency/inspection-agency.module#InspectionAgencyModule' },
			{ path: 'desktopassessor', loadChildren: 'app/desktop-assessor/desktop-assessor.module#DesktopAssessorModule' },
			{ path: 'user-registration', loadChildren: 'app/registration/registration.module#RegistrationModule' },
			{ path: 'trainingpartner', loadChildren: 'app/training-partner/training-partner.module#TrainingPartnerModule' },
			{ path: 'inprocesstp', loadChildren: 'app/inprocess-tp/inprocess-tp.module#InprocessTpModule' }
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
