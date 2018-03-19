import { SearchPipe } from './../../../../../../../pipes/search.pipe';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingCentersService } from './../../../../../../../shared/training-centers.service';
import { TrainingCentersService as TrainingCenterAPIService } from './../../../../../../../services/API/training-centers.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-list-existing-training-centers',
	templateUrl: './list-existing-training-centers.component.html',
	styleUrls: ['./list-existing-training-centers.component.css']
})
export class ListExistingTrainingCentersComponent implements OnInit {
	length: Number;
	page: Number;
	searchData: any;
	searchKeyWord: any;
	constructor(private trainingCentersService: TrainingCentersService,
		private trainingCenterAPIService: TrainingCenterAPIService,
		private router: Router,
		private route: ActivatedRoute
	) { }
	// tslint:disable-next-line:no-output-on-prefix
	@Output() onBack = new EventEmitter<boolean>();
	searchResults = [];
	ngOnInit() {
		this.getTrainingCenters();
	}
	getTrainingCenters() {
		const page = 0;
		console.log(`Training Center Search Results : ${this.trainingCentersService.trainingCenterSearchCriteria}`);
		this.searchResults = [{
			'userName': 'fghdff',
			'spoc': {},
			'email': '',
			'phone': {},
			'firstName': '',
			'lastName': '',
			'status': '',
			'role': '',
			'sector': {
				'name': 'abcd',
				'id': 12
			},
			'assignedHA': '',
			'subSector': {
				'name': 'abcd',
				'id': 12
			},
			'address': {
				state: {
					name: 'abcd',
					id: 12
				},
				district: {
					name: 'district',
					id: 12
				}
			},
			'jobRoles': [
				{
					'qp': 'qp name',
					'qpRefId': '12'
				}
			],
			trainingPartner: {
				name: 'Training Partner Name'
			}
		}, {
			'userName': 'proper',
			'spoc': {},
			'email': '',
			'phone': {},
			'firstName': '',
			'lastName': '',
			'status': '',
			'role': '',
			'sector': {
				'name': 'Agriculture',
				'id': 1
			},
			'assignedHA': '',
			'subSector': {
				'name': 'Coconut Grower',
				'id': 'AGR/Q0503'
			},
			'address': {
				state: {
					name: 'ANDAMAN AND NICOBAR ISLANDS',
					id: 35
				},
				district: {
					name: 'NICOBARS',
					id: 603
				}
			},
			'jobRoles': [
				{
					'qp': 'Coconut Grower',
					'qpRefId': 'AGR/Q0503'
				}
			],
			trainingPartner: {
				name: 'Training Partner Name'
			}
		}];
		this.searchData = [];
		this.searchData.push(this.searchResults[page]);
		this.length = this.searchResults.length;
		// this.trainingCenterAPIService.searchTrainingCenters(this.trainingCentersService.trainingCenterSearchCriteria)
		// 	.subscribe(searchResults => {
		// 		this.searchResults = searchResults;
		// 	}, error => {
		// 		console.log(`There was an error while searching for training centers : ${error}`);
		// 	});
	}
	getmasterTrainers(page) {
		this.searchData = [];
		this.searchData.push(this.searchResults[page - 1]);
	}
	selectTrainingCenter(event, trainingCenterDetails) {
		event.preventDefault();
		this.trainingCentersService.selectedTrainingCenter = trainingCenterDetails;
		this.router.navigate(['../schedule-batch'], { relativeTo: this.route });
	}
}
