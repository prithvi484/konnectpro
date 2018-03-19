
import { element } from 'protractor';
import { SubSector } from './../../../models/sector';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
// import * as XLSX from 'ts-xlsx';

// model
import { NOSDetails } from '../../../models/createNOS';

// services
import { SectorsService } from '../../../services/API/sectors.service';
import { FileService } from '../../../services/API/file.service';
import { SqaService } from '../../../services/sqa.service';
import { ScriptLoaderService } from './../../../services/script-loader.service';

@Component({
	selector: 'app-create-nos',
	templateUrl: './create-nos.component.html',
	styleUrls: ['./create-nos.component.css']
})
export class CreateNosComponent implements OnInit, AfterViewInit {

	@ViewChild('technical') technical: ElementRef;
	@ViewChild('readingSkills') readingSkills: ElementRef;
	@ViewChild('oralCommunication') oralCommunication: ElementRef;
	@ViewChild('plan') plan: ElementRef;
	@ViewChild('customerCentricity') customerCentricity: ElementRef;
	@ViewChild('problemSolving') problemSolving: ElementRef;
	@ViewChild('analyticalThinking') analyticalThinking: ElementRef;
	@ViewChild('criticalThinking') criticalThinking: ElementRef;

	formName = 'General Details';
	NOSData: NOSDetails = new NOSDetails();
	public file = {
		name: 'Choose File'
	};
	hideElement: Boolean = true;
	@ViewChild('fileInput') fileInput: ElementRef;

	// arrayBuffer: any;
	// file1: File;

	generalDetailsForm: FormGroup;
	generalDetails = true;
	subSectors: any;

	performanceCriteriaForm: FormGroup;
	pCriteria = false;

	performanceCriteriaElementGroupingForm: FormGroup;
	performanceCriteriaElementGrouping = false;
	elementGrpoupingCheckBoxes: any;
	// orderForm: FormGroup;

	organizationalContextForm: FormGroup;
	organizationalContext = false;

	knowledgeUnderstanding = false;
	technicalKnowledgeForm: FormGroup;
	technicalKnowledge = false;

	genericSkills = false;
	writingSkillsForm: FormGroup;
	writingSkills = false;
	readingSkillsForm: FormGroup;
	oralCommunicationForm: FormGroup;

	professionalSkills = false;
	decisionMakingForm: FormGroup;
	decisionMaking = false;
	planAndOrganizeForm: FormGroup;
	planAndOrganize = false;
	customerCentricityForm: FormGroup;
	problemSolvingForm: FormGroup;
	analyticalThinkingForm: FormGroup;
	criticalThinkingForm: FormGroup;

	uploadDocsForm: FormGroup;
	uploadDocs = false;

	success = false;

	constructor(private formBuilder: FormBuilder,
		private sectorService: SectorsService,
		private fileService: FileService,
		private SQAService: SqaService,
		private scriptLoaderService: ScriptLoaderService) {
		this.generalDetailsForm = this.formBuilder.group({
			sectorName: ['sector name', []],
			unitCode: ['123123', [Validators.pattern('')]],
			credits: ['12'],
			unitTitle: ['title'],
			subSectorName: ['subsector'],
			descriptionOfOccupationalStandard: ['desc-ccupational'],
			scopeOfOccupationalStandard: ['scope'],
			NOSFile: [null]
		});

		this.performanceCriteriaForm = this.formBuilder.group({
			performanceValues: this.formBuilder.array([this.createRowsForPerformanceForm(Validators.required)])
		});
		for (let i = 0; i < 11; i++) {
			this.addRowsForPerformanceForm([]);
		}

		// this.performanceCriteriaElementGroupingForm = this.formBuilder.group({
		//   criteriaElements: this.formBuilder.array([this.createRowsForCriteriaElements()])
		// });
		// for (let i = 0; i < 3; i++) {
		//   this.addRowsForCriteriaElements();
		// }

		this.organizationalContextForm = this.formBuilder.group({
			organizationalContextValues: this.formBuilder.array([this.createRowsForOrganizationalContext(Validators.required)])
		});
		for (let i = 0; i < 9; i++) {
			this.addRowsForOrganizationalContext(Validators.required);
		}

		this.technicalKnowledgeForm = this.formBuilder.group({
			technicalKnowledgeValues: this.formBuilder.array([this.createRowsForTechnicalKnowledge(Validators.required)])
		});
		for (let i = 0; i < 9; i++) {
			this.addRowsForTechnicalKnowledge(Validators.required);
		}

		this.writingSkillsForm = this.formBuilder.group({
			writingSkillsValues: this.formBuilder.array([this.createRowsForWritingSkills(Validators.required)])
		});
		for (let i = 0; i < 5; i++) {
			this.addRowsForWritingSkills(Validators.required);
		}

		this.readingSkillsForm = this.formBuilder.group({
			readingSkillsValues: this.formBuilder.array([this.createRowsForReadingSkills(Validators.required)])
		});
		for (let i = 0; i < 5; i++) {
			this.addRowsForReadingSkills(Validators.required);
		}

		this.oralCommunicationForm = this.formBuilder.group({
			oralCommunicationValues: this.formBuilder.array([this.createRowsForOralCommunication(Validators.required)])
		});
		for (let i = 0; i < 5; i++) {
			this.addRowsForOralCommunication(Validators.required);
		}

		this.decisionMakingForm = this.formBuilder.group({
			decisionMakingValues: this.formBuilder.array([this.createRowsForDecisionMaking(Validators.required)])
		});
		for (let i = 0; i < 5; i++) {
			this.addRowsForDecisionMaking(Validators.required);
		}

		this.planAndOrganizeForm = this.formBuilder.group({
			planAndOrganizeValues: this.formBuilder.array([this.createRowsForPlanAndOrganize(Validators.required)])
		});
		for (let i = 0; i < 5; i++) {
			this.addRowsForPlanAndOrganize(Validators.required);
		}

		this.customerCentricityForm = this.formBuilder.group({
			customerCentricityValues: this.formBuilder.array([this.createRowsForCustomerCentricity(Validators.required)])
		});
		for (let i = 0; i < 5; i++) {
			this.addRowsForCustomerCentricity(Validators.required);
		}

		this.problemSolvingForm = this.formBuilder.group({
			problemSolvingValues: this.formBuilder.array([this.createRowsForProblemSolving(Validators.required)])
		});
		for (let i = 0; i < 5; i++) {
			this.addRowsForProblemSolving(Validators.required);
		}

		this.analyticalThinkingForm = this.formBuilder.group({
			analyticalThinkingValues: this.formBuilder.array([this.createRowsForAnalyticalThinking(Validators.required)])
		});
		for (let i = 0; i < 5; i++) {
			this.addRowsForAnalyticalThinking(Validators.required);
		}

		this.criticalThinkingForm = this.formBuilder.group({
			criticalThinkingValues: this.formBuilder.array([this.createRowsForCriticalThinking(Validators.required)])
		});
		for (let i = 0; i < 5; i++) {
			this.addRowsForCriticalThinking(Validators.required);
		}

	}

	ngOnInit() {
		this.sectorService.getSubSectors(this.NOSData.sectors.sectorID).subscribe(subSectors => {
			console.log(subSectors);
			this.subSectors = subSectors[0].subSectors;
		});

		this.onSubmit(name);
	}

	ngAfterViewInit() {
		this.scriptLoaderService.loadScripts('app-widgets-bootstrap-datepicker',
			['assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);

	}

	createRowsForPerformanceForm(validator) {
		return this.formBuilder.group({
			pcDescription: ['', validator || []]
		});
	}

	addRowsForPerformanceForm(validator) {
		const flag = this.performanceValues.value.every(val => {
			return val.pcDescription.length;
		});

		if (this.performanceValues.value.length >= 11) {
			if (!flag) { return; }
		}

		const data = this.createRowsForPerformanceForm(validator);
		this.performanceValues.push(data);
	}

	get performanceValues(): FormArray {
		return this.performanceCriteriaForm.get('performanceValues') as FormArray;
	}

	categoriseElements(name) {
		if (name === 'pCriteria') {
			this.pCriteria = false;
			this.performanceCriteriaElementGrouping = true;
			this.formName = 'Performance Criteria w.r.t the Scope - Element Grouping';
			this.elementGrpoupingCheckBoxes = this.performanceCriteriaForm.value;
			console.log('value: ', this.elementGrpoupingCheckBoxes);
			// console.log('val');

			this.performanceCriteriaElementGroupingForm = this.formBuilder.group({
				performanceCriteriaElements: this.formBuilder.array([])
			});
			for (let i = 0; i <= 2; i++) {
				this.addItem();
			}
			for (let j = 0; j < this.performanceCriteriaElements.length; j++) {
				for (let k = 0; k < this.elementGrpoupingCheckBoxes.performanceValues.length; k++) {
					// console.log(this.elementGrpoupingCheckBoxes.performanceValues[k].pcDescription === '');

					if (this.elementGrpoupingCheckBoxes.performanceValues[k].pcDescription !== '') {
						this.addElement(j, this.elementGrpoupingCheckBoxes.performanceValues[k].pcDescription);
					}
				}
			}
			console.log('performanceCriteriaElementGroupingForm:', this.performanceCriteriaElementGroupingForm.value);

		} else { }
	}

	createItem(): FormGroup {
		return this.formBuilder.group({
			element: [''],
			performaceCriteriaValues: this.formBuilder.array([])
		});
	}

	get performanceCriteriaElements(): FormArray {
		return this.performanceCriteriaElementGroupingForm.get('performanceCriteriaElements') as FormArray;
	}

	createItemElements(value): FormGroup {
		return this.formBuilder.group({
			pcID: [''],
			pcDescription: value
		});
	}

	addItem(): void {
		const data = this.createItem();
		this.performanceCriteriaElements.push(data);
	}

	addElement(index, value) {
		const data = this.createItemElements(value);
		console.log(this.performanceCriteriaElements);

		this.performanceCriteriaElements.controls[index]['controls'].performaceCriteriaValues.push(data);
	}

	addNewElement() {

		this.addItem();
		console.log(this.elementGrpoupingCheckBoxes.performanceValues);
		for (let k = 0; k < this.elementGrpoupingCheckBoxes.performanceValues.length; k++) {
			if (this.elementGrpoupingCheckBoxes.performanceValues[k].pcDescription !== '') {
				// tslint:disable-next-line:max-line-length
				this.addElement(this.performanceCriteriaElements.controls.length - 1, this.elementGrpoupingCheckBoxes.performanceValues[k].pcDescription);
			}
		}
	}

	get performaceCriteriaValues(): FormArray {
		return this.performanceCriteriaElementGroupingForm.get('performanceCriteriaElements').get('performaceCriteriaValues') as FormArray;
	}

	createRowsForOrganizationalContext(validator) {
		return this.formBuilder.group({
			ocID: [''],
			ocValues: ['', validator || []]
		});
	}

	addRowsForOrganizationalContext(validator) {
		const flag = this.organizationalContextValues.value.every(val => {
			return val.ocValues.length;
		});
		if (this.organizationalContextValues.value.length >= 9) {
			if (!flag) { return; }
		}
		const data = this.createRowsForOrganizationalContext(validator);
		this.organizationalContextValues.push(data);
	}

	get organizationalContextValues(): FormArray {
		return this.organizationalContextForm.get('organizationalContextValues') as FormArray;
	}

	createRowsForTechnicalKnowledge(validator) {
		return this.formBuilder.group({
			tkID: [''],
			tkValues: ['', validator || []]
		});
	}

	addRowsForTechnicalKnowledge(validator) {
		const flag = this.technicalKnowledgeValues.value.every(val => {
			return val.tkValues.length;
		});
		if (this.technicalKnowledgeValues.value.length >= 9) {
			if (!flag) { return; }
		}
		const data = this.createRowsForTechnicalKnowledge(validator);
		this.technicalKnowledgeValues.push(data);
	}

	get technicalKnowledgeValues(): FormArray {
		return this.technicalKnowledgeForm.get('technicalKnowledgeValues') as FormArray;
	}

	createRowsForWritingSkills(validator) {
		return this.formBuilder.group({
			wsID: [''],
			wsValues: ['', validator || []]
		});
	}

	addRowsForWritingSkills(validator) {
		const flag = this.writingSkillsValues.value.every(val => {
			return val.wsValues.length;
		});
		if (this.writingSkillsValues.value.length >= 5) {
			if (!flag) { return; }
		}
		const data = this.createRowsForWritingSkills(validator);
		this.writingSkillsValues.push(data);
	}

	get writingSkillsValues(): FormArray {
		return this.writingSkillsForm.get('writingSkillsValues') as FormArray;
	}

	createRowsForReadingSkills(validator) {
		return this.formBuilder.group({
			rsID: [''],
			rsValues: ['', validator || []]
		});
	}

	addRowsForReadingSkills(validator) {
		const flag = this.readingSkillsValues.value.every(val => {
			return val.rsValues.length;
		});
		if (this.readingSkillsValues.value.length >= 5) {
			if (!flag) { return; }
		}
		const data = this.createRowsForReadingSkills(validator);
		this.readingSkillsValues.push(data);
	}

	get readingSkillsValues(): FormArray {
		return this.readingSkillsForm.get('readingSkillsValues') as FormArray;
	}

	createRowsForOralCommunication(validator) {
		return this.formBuilder.group({
			ocID: [''],
			ocValues: ['', validator || []]
		});
	}

	addRowsForOralCommunication(validator) {
		const flag = this.oralCommunicationValues.value.every(val => {
			return val.ocValues.length;
		});
		if (this.oralCommunicationValues.value.length >= 5) {
			if (!flag) { return; }
		}
		const data = this.createRowsForOralCommunication(validator);
		this.oralCommunicationValues.push(data);
	}

	get oralCommunicationValues(): FormArray {
		return this.oralCommunicationForm.get('oralCommunicationValues') as FormArray;
	}

	createRowsForDecisionMaking(validator) {
		return this.formBuilder.group({
			dmID: [''],
			dmValues: ['', validator || []]
		});
	}

	addRowsForDecisionMaking(validator) {
		const flag = this.decisionMakingValues.value.every(val => {
			return val.dmValues.length;
		});
		if (this.decisionMakingValues.value.length >= 5) {
			if (!flag) { return; }
		}
		const data = this.createRowsForDecisionMaking(validator);
		this.decisionMakingValues.push(data);
	}

	get decisionMakingValues(): FormArray {
		return this.decisionMakingForm.get('decisionMakingValues') as FormArray;
	}

	createRowsForPlanAndOrganize(validator) {
		return this.formBuilder.group({
			poID: [''],
			poValues: ['po', validator || []]
		});
	}

	addRowsForPlanAndOrganize(validator) {
		const flag = this.planAndOrganizeValues.value.every(val => {
			return val.poValues.length;
		});
		if (this.planAndOrganizeValues.value.length >= 5) {
			if (!flag) { return; }
		}
		const data = this.createRowsForPlanAndOrganize(validator);
		this.planAndOrganizeValues.push(data);
	}

	get planAndOrganizeValues(): FormArray {
		return this.planAndOrganizeForm.get('planAndOrganizeValues') as FormArray;
	}

	createRowsForCustomerCentricity(validator) {
		return this.formBuilder.group({
			ccID: [''],
			ccValues: ['', validator || []]
		});
	}

	addRowsForCustomerCentricity(validator) {
		const flag = this.customerCentricityValues.value.every(val => {
			return val.ccValues.length;
		});
		if (this.customerCentricityValues.value.length >= 5) {
			if (!flag) { return; }
		}
		const data = this.createRowsForCustomerCentricity(validator);
		this.customerCentricityValues.push(data);
	}

	get customerCentricityValues(): FormArray {
		return this.customerCentricityForm.get('customerCentricityValues') as FormArray;
	}

	createRowsForProblemSolving(validator) {
		return this.formBuilder.group({
			psID: [''],
			psValues: ['', validator || []]
		});
	}

	addRowsForProblemSolving(validator) {
		const flag = this.problemSolvingValues.value.every(val => {
			return val.psValues.length;
		});
		if (this.problemSolvingValues.value.length >= 5) {
			if (!flag) { return; }
		}
		const data = this.createRowsForProblemSolving(validator);
		this.problemSolvingValues.push(data);
	}

	get problemSolvingValues(): FormArray {
		return this.problemSolvingForm.get('problemSolvingValues') as FormArray;
	}

	createRowsForAnalyticalThinking(validator) {
		return this.formBuilder.group({
			atID: [''],
			atValues: ['', validator || []]
		});
	}

	addRowsForAnalyticalThinking(validator) {
		const flag = this.analyticalThinkingValues.value.every(val => {
			return val.atValues.length;
		});
		if (this.analyticalThinkingValues.value.length >= 5) {
			if (!flag) { return; }
		}
		const data = this.createRowsForAnalyticalThinking(validator);
		this.analyticalThinkingValues.push(data);
	}

	get analyticalThinkingValues(): FormArray {
		return this.analyticalThinkingForm.get('analyticalThinkingValues') as FormArray;
	}

	createRowsForCriticalThinking(validator) {
		return this.formBuilder.group({
			ccID: [''],
			ctValues: ['', validator || []]
		});
	}

	addRowsForCriticalThinking(validator) {
		const flag = this.criticalThinkingValues.value.every(val => {
			return val.ctValues.length;
		});
		if (this.criticalThinkingValues.value.length >= 5) {
			if (!flag) { return; }
		}
		const data = this.createRowsForCriticalThinking(validator);
		this.criticalThinkingValues.push(data);
	}

	get criticalThinkingValues(): FormArray {
		return this.criticalThinkingForm.get('criticalThinkingValues') as FormArray;
	}

	onFileChange(event) {
		if (event.target.files && event.target.files.length > 0) {
			this.file = event.target.files[0];
			this.generalDetailsForm.get('NOSFile').setValue(this.file);
		}
	}

	uploadFile() {
		if (this.generalDetailsForm.get('NOSFile').value) {
			this.getFileUploadCredentials()
				.flatMap((credentials) => {
					return this.fileService.uploadFile(this.generalDetailsForm.get('NOSFile').value, 'SSC', credentials);
				})
				.subscribe(res => {
					console.log(`After file Upload: S3 response: ${res}`);
					this.generalDetailsForm.get('NOSFile').setValue({
						name: this.file.name,
						URL: res
					});
				}, error => {
					console.log(`There was an error in getting credentials for file upload : ${error}`);
				});
		}
	}

	getFileUploadCredentials() {
		return this.fileService.getFileUploadCredentials('SSC');
	}

	onSkip(name) {
		window.scrollTo(0, 0);
		switch (name) {
			case 'readingSkills': this.readingSkills.nativeElement.click();
				break;
			case 'oralCommunication': this.oralCommunication.nativeElement.click();
				break;
			case 'genericSkills': this.knowledgeUnderstanding = false;
				this.formName = 'Core/Generic Skills (Optional)';
				this.genericSkills = true;
				break;
			case 'professionalSkills': this.genericSkills = false;
				this.formName = 'Professional Skills (Optional)';
				this.professionalSkills = true;
				break;
			case 'plan': this.plan.nativeElement.click();
				break;
			case 'customerCentricity': this.customerCentricity.nativeElement.click();
				break;
			case 'problemSolving': this.problemSolving.nativeElement.click();
				break;
			case 'analyticalThinking': this.analyticalThinking.nativeElement.click();
				break;
			case 'criticalThinking': this.criticalThinking.nativeElement.click();
				break;
			case 'uploadDocs': this.professionalSkills = false;
				this.formName = 'Upload document & Review';
				this.uploadDocs = true;
				break;
			default: break;
		}
	}

	onEdit(name) {
		window.scrollTo(0, 0);
		switch (name) {
			case 'generalDetails': this.uploadDocs = false;
				this.generalDetails = true;
				break;
			default: break;
		}
	}

	onSave(name) {
		window.scrollTo(0, 0);
		switch (name) {
			case 'pCriteria': this.generalDetails = false;
				this.formName = 'Performance Criteria w.r.t the Scope';
				this.pCriteria = true;
				break;
			case 'performanceCriteriaElementGrouping': this.pCriteria = false;
				this.formName = 'Performance Criteria w.r.t the Scope- Element Grouping';
				this.performanceCriteriaElementGrouping = true;
				break;
			case 'knowledgeUnderstanding': this.performanceCriteriaElementGrouping = false;
				this.pCriteria = false;
				this.formName = 'Knowledge & Understanding (K)';
				this.knowledgeUnderstanding = true;
				break;
			case 'genericSkills': this.knowledgeUnderstanding = false;
				this.formName = 'Core/Generic Skills (Optional)';
				this.genericSkills = true;
				break;
			case 'technical': this.technical.nativeElement.click();
				break;
			case 'readingSkills': this.readingSkills.nativeElement.click();
				break;
			case 'oralCommunication': this.oralCommunication.nativeElement.click();
				break;
			case 'professionalSkills': this.genericSkills = false;
				this.formName = 'Professional Skills (Optional)';
				this.professionalSkills = true;
				break;
			case 'plan': this.plan.nativeElement.click();
				break;
			case 'customerCentricity': this.customerCentricity.nativeElement.click();
				break;
			case 'problemSolving': this.problemSolving.nativeElement.click();
				break;
			case 'analyticalThinking': this.analyticalThinking.nativeElement.click();
				break;
			case 'criticalThinking': this.criticalThinking.nativeElement.click();
				break;
			case 'uploadDocs': this.professionalSkills = false;
				this.formName = 'Upload document & Review';
				this.uploadDocs = true;
				break;
			case 'success': this.uploadDocs = false;
				this.formName = 'Success';
				this.success = true;
				break;
			default: break;
		}
		console.log(this.performanceCriteriaForm.value);
		console.log(this.performanceCriteriaElementGroupingForm.value);


		// general details
		this.NOSData.sectors.sectorName = this.generalDetailsForm.value.sectorName;
		this.NOSData.unitCode = this.generalDetailsForm.value.unitCode;
		this.NOSData.credits = this.generalDetailsForm.value.credits;
		this.NOSData.unitTitle = this.generalDetailsForm.value.unitTile;
		this.NOSData.descriptionOfOccupationalStandard = this.generalDetailsForm.value.descriptionOfOccupationalStandard;

		// performance criteria
		if (this.performanceCriteriaElementGroupingForm === undefined) {
			this.NOSData.PerformanceCriteria.performanceCriteriaElements[0].performanceCriteriaValues = this.performanceCriteriaForm.value;
		} else {
			this.NOSData.PerformanceCriteria.performanceCriteriaElements = this.performanceCriteriaElementGroupingForm.value;
		}

		// knowledge & understanding
		this.NOSData.KnowledgeAndUnderstanding.organizationalContext.organizationalContextValues = this.organizationalContextForm.value;
		this.NOSData.technicalKnowledge.technicalKnowledgeValues = this.technicalKnowledgeForm.value.technicalKnowledgeValues;

		// generic skills
		this.NOSData.Skills.coreGenericSkills.writingSkills.writingSkillsValues = this.writingSkillsForm.value;
		this.NOSData.Skills.coreGenericSkills.readingSkills.readingSkillsValues = this.readingSkillsForm.value;
		this.NOSData.Skills.coreGenericSkills.oralCommunication.oralCommunicationValues = this.oralCommunicationForm.value;

		// professional
		this.NOSData.professionalSkills.decisionMaking.decisionMakingValues = this.decisionMakingForm.value;
		this.NOSData.planAndOrganize.planAndOrganizeValues = this.planAndOrganizeForm.value;
		this.NOSData.customerCentricity.customerCentricityValues = this.customerCentricityForm.value;
		this.NOSData.problemSolving.problemSolvingValues = this.problemSolvingForm.value;
		this.NOSData.analyticalThinking.analyticalThinkingValues = this.analyticalThinkingForm.value;
		this.NOSData.criticalThinking.criticalThinkingValues = this.criticalThinkingForm.value;

	}

	onSubmit(name) {
		if (name === 'success') {
			this.uploadDocs = false;
			this.formName = 'Success';
			this.success = true;
		}

		console.log('NOSData: ', this.NOSData);
		this.SQAService.saveNOS(this.NOSData).subscribe(res => { },
			err => { });
	}

	// incomingfile(event) {
	// 	this.file = event.target.files[0];
	// }

	// Upload() {
	// 	let fileReader = new FileReader();
	// 	fileReader.onload = (e) => {
	// 		this.arrayBuffer = fileReader.result;
	// 		const data = new Uint8Array(this.arrayBuffer);
	// 		const arr = new Array();
	// 		for (let i = 0; i != data.length; ++i) {
	// 			arr[i] = String.fromCharCode(data[i]);
	// 		}
	// 		const bstr = arr.join("");
	// 		const workbook = XLSX.read(bstr, { type: 'binary' });
	// 		const first_sheet_name = workbook.SheetNames[0];
	// 		const worksheet = workbook.Sheets[first_sheet_name];
	// 		console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
	// 	};
	// 	fileReader.readAsArrayBuffer(this.file1);
	// }

}
