import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SSCRoutingModule } from './ssc-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingOfTrainersComponent } from './trainings/training-of-trainers/training-of-trainers.component';
import { CreateBatchComponent } from './trainings/training-of-trainers/create-batch/create-batch.component';
import { SharedModule } from '../shared.module';
// tslint:disable-next-line:max-line-length
import { ExistingTrainingCenterComponent } from './trainings/training-of-trainers/create-batch/assign-training-center/existing-training-center/existing-training-center.component';
// tslint:disable-next-line:max-line-length
import { AddNewTrainingCenterComponent } from './trainings/training-of-trainers/create-batch/assign-training-center/add-new-training-center/add-new-training-center.component';
// tslint:disable-next-line:max-line-length
import { SearchFormComponent } from './trainings/training-of-trainers/create-batch/assign-training-center/existing-training-center/search-form/search-form.component';
// tslint:disable-next-line:max-line-length
import { ListExistingTrainingCentersComponent } from './trainings/training-of-trainers/create-batch/assign-training-center/existing-training-center/list-existing-training-centers/list-existing-training-centers.component';
// tslint:disable-next-line:max-line-length
import { AssignTrainingCenterComponent } from './trainings/training-of-trainers/create-batch/assign-training-center/assign-training-center.component';
import { ScheduleBatchComponent } from './trainings/training-of-trainers/create-batch/schedule-batch/schedule-batch.component';
import { MasterTrainerComponent } from './trainings/training-of-trainers/master-trainer/master-trainer.component';
// tslint:disable-next-line:max-line-length
import { MasterTrainerAssignComponent } from './trainings/training-of-trainers/master-trainer/master-trainer-assign/master-trainer-assign.component';
import { SqaComponent } from './sqa/sqa.component';
import { SqaDashboardComponent } from './sqa/sqa-dashboard/sqa-dashboard.component';
import { CreateNosComponent } from './sqa/create-nos/create-nos.component';
import { CreateQpComponent } from './sqa/create-qp/create-qp.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingCentersService } from './../shared/training-centers.service';
import { DashboardComponent as TrainingsDashboard } from './trainings/dashboard/dashboard.component';
// tslint:disable-next-line:max-line-length
import { MasterTrainerListComponent } from './trainings/training-of-trainers/master-trainer/master-trainer-list/master-trainer-list.component';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
	imports: [
		CommonModule,
		SSCRoutingModule,
		SharedModule,
		ReactiveFormsModule
	],
	declarations: [
		HomeComponent,
		DashboardComponent,
		TrainingOfTrainersComponent,
		CreateBatchComponent,
		ExistingTrainingCenterComponent,
		AddNewTrainingCenterComponent,
		SearchFormComponent,
		ListExistingTrainingCentersComponent,
		AssignTrainingCenterComponent,
		ScheduleBatchComponent,
		MasterTrainerComponent,
		SqaComponent,
		SqaDashboardComponent,
		CreateNosComponent,
		CreateQpComponent,
		TrainingsComponent,
		TrainingsDashboard,
		MasterTrainerAssignComponent,
		MasterTrainerListComponent,
		SearchPipe
	],
	providers: [
		TrainingCentersService
	]
})
export class SSCModule { }
