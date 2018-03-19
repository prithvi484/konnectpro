import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from './../../../../environments/environment';

// Model
import { QPDetails } from './../../../models/create-qp';

// Serices
import { ApiService } from './../../../services/API/api.service';
import { SectorsService } from '../../../services/API/sectors.service';
import { EducationQualificationService } from './../../../services/API/education-qualification.service';
import { PreRequisiteService } from './../../../services/API/pre-requisite.service';
import { OccupationService } from './../../../services/API/occupation.service';
import { JobEntryAgeService } from './../../../services/API/job-entry-age.service';
import { ExperienceReqService } from './../../../services/API/experience-req.service';
import { GeographiesService } from './../../../services/API/geographies.service';
import { FileService } from './../../../services/API/file.service';
import { SqaService } from './../../../services/sqa.service';
import { SearchPipe } from '../../../pipes/search.pipe';
@Component({
	selector: 'app-create-qp',
	templateUrl: './create-qp.component.html',
	styleUrls: ['./create-qp.component.css']
})
export class CreateQpComponent implements OnInit {

	public file = {
		name: 'Choose File'
	};
	hideElement: Boolean = true;
	@ViewChild('fileInput') fileInput: ElementRef;

	basicDetails = true;
	compulsoryNOS = false;
	electiveNOS = false;
	optionNOS = false;
	reviewAndSubmit = false;
	successQP = false;
	linkNOS = false;
	subSectors: any;
	qualification: any;
	experience: any;
	jobAge: any;
	occupation: any;
	preRequisite: any;
	records: any;
	basicDetailsForm: FormGroup;
	searchText = '';

	QPData: QPDetails = new QPDetails();
	constructor(
		private apiService: ApiService,
		private sectorService: SectorsService,
		private educationService: EducationQualificationService,
		private preRequisiteService: PreRequisiteService,
		private occupationService: OccupationService,
		private jobEntryService: JobEntryAgeService,
		private experienceReqService: ExperienceReqService,
		private geographiesService: GeographiesService,
		private formBuilder: FormBuilder,
		private fileService: FileService,
		private sqaService: SqaService
	) {
		this.basicDetailsForm = this.formBuilder.group({
			'country': ['', [Validators.required]],
			'sectorName': ['', [Validators.required]],
			'subSectorName': ['', [Validators.required]],
			'qpCode': ['', [Validators.required]],
			'occupation': ['', [Validators.required]],
			'alignedTo': ['', [Validators.required]],
			'nsqfLevel': ['', [Validators.required]],
			'jobRole': ['', [Validators.required]],
			'jobRoleDesc': ['', [Validators.required]],
			'personalAttrs': ['', [Validators.required]],
			'minEduQual': ['', [Validators.required]],
			'maxEduQual': ['', [Validators.required]],
			'preReqLicenseTrng': ['', [Validators.required]],
			'minJobEntryAge': ['', [Validators.required]],
			'expReq': ['', [Validators.required]],
			'prefCriteria': ['', [Validators.required]],
			'nosData': this.formBuilder.array([]),
			'QPFile': null
		});
		// this.QPData.country.countryDesc = this.basicDetailsForm.value.country;
		this.QPData.sectors.sectorName = this.basicDetailsForm.value.sectorName;
		this.QPData.sectors.subSectorName = this.basicDetailsForm.value.subSectorName;
		this.QPData.qpCode = this.basicDetailsForm.value.qpCode;
		this.QPData.occupation.occupationDesc = this.basicDetailsForm.value.occupation;
		this.QPData.alignedTo = this.basicDetailsForm.value.alignedTo;
		this.QPData.nsqfLevel = this.basicDetailsForm.value.nsqfLevel;
		this.QPData.jobRole = this.basicDetailsForm.value.jobRole;
		this.QPData.jobRoleDesc = this.basicDetailsForm.value.jobRoleDesc;
		this.QPData.personalAttrs = this.basicDetailsForm.value.personalAttrs;
		this.QPData.minEduQual.minEduQualDesc = this.basicDetailsForm.value.minEduQual;
		this.QPData.maxEduQual.maxEduQualDesc = this.basicDetailsForm.value.maxEduQual;
		this.QPData.preReqLicenseTrng.preReqLicenseTrngDesc = this.basicDetailsForm.value.preReqLicenseTrng;
		this.QPData.minJobEntryAge.minJobEntryAge = this.basicDetailsForm.value.minJobEntryAge;
		this.QPData.expReq.expReqDesc = this.basicDetailsForm.value.expReq;
		this.QPData.nos = this.basicDetailsForm.value.nosData;
		this.QPData.perfCriteria = this.basicDetailsForm.value.perfCriteria;
	}
	public states = [];

	NOSData = this.QPData.nos;

	ngOnInit() {
		this.records = [
			{ unitCode: 1, unitTitle: 'NOS1', sectorName: 'sectorName1', subSectorName: 'Sub' },
			{ unitCode: 2, unitTitle: 'NOS2', sectorName: 'sectorName2', subSectorName: 'Sub' },
			{ unitCode: 3, unitTitle: 'NOS3', sectorName: 'sectorName3', subSectorName: 'Sub' },
			{ unitCode: 4, unitTitle: 'NOS4', sectorName: 'sectorName4', subSectorName: 'Sub' },
			{ unitCode: 5, unitTitle: 'NOS5', sectorName: 'sectorName5', subSectorName: 'Sub' },
			{ unitCode: 6, unitTitle: 'NOS6', sectorName: 'sectorName6', subSectorName: 'Sub' },
			{ unitCode: 7, unitTitle: 'NOS7', sectorName: 'sectorName7', subSectorName: 'Sub' },
			{ unitCode: 8, unitTitle: 'NOS8', sectorName: 'sectorName8', subSectorName: 'Sub' },
			{ unitCode: 9, unitTitle: 'NOS9', sectorName: 'sectorName9', subSectorName: 'Sub' },
			{ unitCode: 10, unitTitle: 'NOS10', sectorName: 'sectorName10', subSectorName: 'Sub' }
		];

		console.log('nos data', this.NOSData);
		console.log('QP data', this.QPData);
		// this.getSubSectors();
		this.getEduQual();
		this.getExpReq();
		this.getJobEntryAge();
		this.getOccupation();
		this.getPreRequisite();
		// this.getStates();
	}

	// getStates() {
	//   this.geographiesService.getStates()
	//   .subscribe(states => {
	//     console.log('States Worked : ', states);
	//   })
	// }

	// getSubSectors() {
	//   this.sectorService.getSubSectors(this.QPData.sectors.sectorID)
	//     .subscribe(subSectors => {
	//       this.subSectors = subSectors;
	//       console.log('Worked..', subSectors);
	//     });
	// }

	getEduQual() {
		this.educationService.getEduQualification()
			.subscribe(qualification => {
				this.qualification = qualification;
			});
	}
	getExpReq() {
		this.experienceReqService.getExpReq()
			.subscribe(experience => {
				this.experience = experience;
			});
	}
	getJobEntryAge() {
		this.jobEntryService.getJobEntryAge()
			.subscribe(jobAge => {
				this.jobAge = jobAge;
			});
	}
	getOccupation() {
		this.occupationService.getOccupation()
			.subscribe(occupation => {
				this.occupation = occupation;
			});
	}
	getPreRequisite() {
		this.preRequisiteService.getPreRequisite()
			.subscribe(preRequisite => {
				this.preRequisite = preRequisite;
			});
	}

	linkQP(record) {
		console.log(record);
		console.log(this.basicDetailsForm.value);
		// this.QPData.NOS.push(record);
		this.basicDetailsForm.value.nosData.push(record);
		this.linkNOS = true;
		record.linked = true;
	}


	downloadTemplate() {
		console.log('Document Added');
	}

	onFileChange(event) {
		if (event.target.files && event.target.files.length > 0) {
			console.log(event.target.files[0]);
			this.file = event.target.files[0];
			this.basicDetailsForm.get('QPFile').setValue(this.file);
		}
	}

	// addFile() {
	//   if (this.basicDetailsForm.get('QPFile').value) {
	//     this.getFileUploadCredentials()
	//       .flatMap((credentials) => {
	//         return this.fileService.addFile(this.basicDetailsForm.get('QPFile').value, 'SSC', credentials);
	//       })
	//       .subscribe(res => {
	//         console.log(`After file Upload: S3 response: ${res}`);
	//         this.basicDetailsForm.get('QPFile').setValue({
	//           name: this.file.name,
	//           URL: res
	//         });
	//       }, error => {
	//         console.log(`There was an error in getting credentials for file upload : ${error}`);
	//       });
	//   }
	// }

	getFileUploadCredentials() {
		return this.fileService.getFileUploadCredentials('SSC');
	}

	saveQP(name: string) {
		switch (name) {
			case 'compulsoryNOS': this.basicDetails = false;
				this.compulsoryNOS = true;
				break;
			case 'electiveNOS': this.compulsoryNOS = false;
				this.electiveNOS = true;
				break;
			case 'optionNOS': this.electiveNOS = false;
				this.optionNOS = true;
				break;
			case 'reviewAndSubmit': this.optionNOS = false;
				this.reviewAndSubmit = true;
				break;
			case 'successQP': this.reviewAndSubmit = false;
				this.successQP = true;
				break;
		}
		console.log('value in form', this.basicDetailsForm.value);
	}

	skipStep(name: string) {
		switch (name) {
			case 'compulsoryNOS': this.basicDetails = false;
				this.compulsoryNOS = true;
				break;
			case 'electiveNOS': this.compulsoryNOS = false;
				this.electiveNOS = true;
				break;
			case 'optionNOS': this.electiveNOS = false;
				this.optionNOS = true;
				break;
			case 'reviewAndSubmit': this.optionNOS = false;
				this.reviewAndSubmit = true;
				break;
			case 'successQP': this.reviewAndSubmit = false;
				this.successQP = true;
				break;
		}
	}

	close() {
		this.reviewAndSubmit = false;
		this.successQP = true;
	}

	submitQP() {
		this.sqaService.saveQP(this.QPData)
			.subscribe(resp => {
				this.successQP = true;
			});
	}

	assignNOSData(pageNo: number) {

	}

}
