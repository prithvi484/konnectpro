import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing';
import { JwtHelper } from 'angular2-jwt';
import { SharedModule } from './shared.module';
import { CookieModule } from 'ngx-cookie';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// component
import { AppComponent } from './app.component';
// services
import { ApiService } from './services/API/api.service';
import { MasterTrainerService } from './services/API/master-trainer.service';
import { ErrorHandlingService } from './services/error-handling.service';
import { InterceptorService } from './services/interceptor.service';
import { RoutingService } from './services/routing.service';
import { RouteGuardService } from './services/route-guard.service';
import { StorageService } from './services/storage.service';
import { ScriptLoaderService } from './services//script-loader.service';
import { FileService } from './services/API/file.service';
import { GeographiesService } from './services/API/geographies.service';
import { SectorsService } from './services/API/sectors.service';
import { TrainingCentersService } from './services/API/training-centers.service';
import { EducationQualificationService } from './services/API/education-qualification.service';
import { PreRequisiteService } from './services/API/pre-requisite.service';
import { OccupationService } from './services/API/occupation.service';
import { JobEntryAgeService } from './services/API/job-entry-age.service';
import { ExperienceReqService } from './services/API/experience-req.service';
import { SqaService } from './services/sqa.service';
import { TotBatchService } from './services/API/tot-batch.service';
import { SearchPipe } from './pipes/search.pipe';
import { SSCModule } from './ssc/ssc.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		CookieModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SSCModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		ScriptLoaderService,
		StorageService,
		RouteGuardService,
		RoutingService,
		InterceptorService,
		ErrorHandlingService,
		ApiService,
		MasterTrainerService,
		JwtHelper,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptorService,
			multi: true,
		},
		FileService,
		GeographiesService,
		SectorsService,
		TrainingCentersService,
		EducationQualificationService,
		PreRequisiteService,
		OccupationService,
		JobEntryAgeService,
		ExperienceReqService,
		SqaService,
		TotBatchService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
