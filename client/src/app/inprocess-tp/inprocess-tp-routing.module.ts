
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionDaCommentsComponent } from './action-da-comments/action-da-comments.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent,
		children: [
			{ path: '', component: DashboardComponent },
			{ path: 'action-dp-comments', component: ActionDaCommentsComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InprocessTpRoutingModule { }
