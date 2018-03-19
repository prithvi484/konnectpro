import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateNsdfadminComponent } from './create-nsdfadmin/create-nsdfadmin.component';

@NgModule({
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, DashboardComponent, CreateNsdfadminComponent]
})
export class SuperAdminModule { }
