import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTcComponent } from './create-tc/create-tc.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'addTrainingCentre', component: CreateTcComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingPartnerRoutingModule { }
