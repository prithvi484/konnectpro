// tslint:disable-next-line:max-line-length
import { MasterTrainerListComponent } from './trainings/training-of-trainers/master-trainer/master-trainer-list/master-trainer-list.component';
import { MasterTrainerAssignComponent } from './trainings/training-of-trainers/master-trainer/master-trainer-assign/master-trainer-assign.component';
// tslint:disable-next-line:max-line-length
import { AssignTrainingCenterComponent } from './trainings/training-of-trainers/create-batch/assign-training-center/assign-training-center.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingOfTrainersComponent } from './trainings/training-of-trainers/training-of-trainers.component';
import { CreateBatchComponent } from './trainings/training-of-trainers/create-batch/create-batch.component';
// tslint:disable-next-line:max-line-length
import { AddNewTrainingCenterComponent } from './trainings/training-of-trainers/create-batch/assign-training-center/add-new-training-center/add-new-training-center.component';
import { ScheduleBatchComponent } from './trainings/training-of-trainers/create-batch/schedule-batch/schedule-batch.component';
// tslint:disable-next-line:max-line-length
import { ExistingTrainingCenterComponent } from './trainings/training-of-trainers/create-batch/assign-training-center/existing-training-center/existing-training-center.component';
import { MasterTrainerComponent } from './trainings/training-of-trainers/master-trainer/master-trainer.component';
import { SqaComponent } from './sqa/sqa.component';
import { SqaDashboardComponent } from './sqa/sqa-dashboard/sqa-dashboard.component';
import { CreateNosComponent } from './sqa/create-nos/create-nos.component';
import { CreateQpComponent } from './sqa/create-qp/create-qp.component';
import { DashboardComponent as TrainingsDashboard } from './trainings/dashboard/dashboard.component';
const routes: Routes = [{
	path: '', component: HomeComponent,
	children: [{
		path: '', component: DashboardComponent
	}, {
		path: 'trainings-dashboard', component: TrainingsDashboard,
	}, {
		path: 'training-of-trainers', component: TrainingOfTrainersComponent,
		children: [{
			path: 'create-batch', component: CreateBatchComponent,
			children: [{
				path: '', component: AssignTrainingCenterComponent, children: [{
					path: 'existing-training-center', component: ExistingTrainingCenterComponent
				}, {
					path: 'add-new-training-center', component: AddNewTrainingCenterComponent
				}]
			}, {
				path: 'schedule-batch', component: ScheduleBatchComponent
			}]
		}, {
			path: 'master-trainer/master-trainer-list', component: MasterTrainerListComponent
		}, {
			path: 'master-trainer/assign/:id', component: MasterTrainerAssignComponent
		}],
	},
	{
		path: 'sqa', component: SqaComponent,
		children: [
			{ path: '', component: SqaDashboardComponent },
			{ path: 'create-nos', component: CreateNosComponent },
			{ path: 'create-qp', component: CreateQpComponent }
		]
	}]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SSCRoutingModule { }
