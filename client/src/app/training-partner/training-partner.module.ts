import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingPartnerRoutingModule } from './training-partner-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTcComponent } from './create-tc/create-tc.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingPartnerRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, DashboardComponent, CreateTcComponent]
})
export class TrainingPartnerModule { }
