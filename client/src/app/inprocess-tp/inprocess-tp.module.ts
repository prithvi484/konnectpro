import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InprocessTpRoutingModule } from './inprocess-tp-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionDaCommentsComponent } from './action-da-comments/action-da-comments.component';

@NgModule({
	imports: [
		CommonModule,
		InprocessTpRoutingModule,
		SharedModule
	],
	declarations: [HomeComponent, DashboardComponent, ActionDaCommentsComponent]
})
export class InprocessTpModule { }
