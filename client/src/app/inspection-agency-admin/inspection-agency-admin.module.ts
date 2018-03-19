import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectionAgencyAdminRoutingModule } from './inspection-agency-admin-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    InspectionAgencyAdminRoutingModule
  ],
  declarations: [HomeComponent]
})
export class InspectionAgencyAdminModule { }
