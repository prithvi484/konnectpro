import { SearchPipe } from './../../../../../pipes/search.pipe';
import { Constants } from './../../../../../shared/constants/constants';
import { Component, OnInit } from '@angular/core';
import { MasterTrainerService } from './../../../../../services/API/master-trainer.service';
@Component({
	selector: 'app-master-trainer-list',
	templateUrl: './master-trainer-list.component.html',
	styleUrls: ['./master-trainer-list.component.css']
})
export class MasterTrainerListComponent implements OnInit {

	masterTrainers: any;
	searchKeyWord: String;
	length = 10;
	itemsCopy: any;
	pageNo = 1;
	recordsPerPage: number = Constants.RECORDSPERPAGE;
	constructor(private masterTrainerService: MasterTrainerService) { }

	ngOnInit() {
		this.getMasterTrainers();
	}

	getMasterTrainers() {
		console.log(this.pageNo, this.recordsPerPage);
		this.masterTrainerService.getMasterTrainers(this.pageNo, this.recordsPerPage).subscribe(masterTrainers => {
			this.masterTrainers = masterTrainers.data;
			this.length = masterTrainers.count;
		}, err => {
			console.log(err);
		});
	}

	setPageNumber(pageNo: number) {
		this.pageNo = pageNo;
		this.getMasterTrainers();
	}
	setRecordsPerPage(recordsPerPage: number) {
		this.recordsPerPage = recordsPerPage;
		this.getMasterTrainers();
	}

}
