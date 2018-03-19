import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonRegistrationComponent } from './common-registration/common-registration.component';
import { TpRegistrationComponent } from './tp-registration/tp-registration.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, DashboardComponent, CommonRegistrationComponent, TpRegistrationComponent]
})
export class RegistrationModule { }
