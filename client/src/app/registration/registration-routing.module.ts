import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonRegistrationComponent } from './common-registration/common-registration.component';
import { TpRegistrationComponent } from './tp-registration/tp-registration.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: CommonRegistrationComponent },
      { path: 'trainingpartner/registration', component: TpRegistrationComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
