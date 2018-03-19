import { Trainer } from './../../../../../models/masterTrainers';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MasterTrainerService } from './../../../../../services/API/master-trainer.service';
@Component({
	selector: 'app-master-trainer-assign',
	templateUrl: './master-trainer-assign.component.html',
	styleUrls: ['./master-trainer-assign.component.css']
})
export class MasterTrainerAssignComponent implements OnInit {
	id: any;
	trinerMaster = new Trainer();
	constructor(private route: ActivatedRoute, private masterTrainerService: MasterTrainerService) { }
	ngOnInit() {
		this.getMasterTrainer();
	}
	getMasterTrainer() {
		this.id = this.route.snapshot.params.id;
		this.masterTrainerService.getMasterTrainer(this.id).subscribe(res => {
			this.trinerMaster = res;
		}, err => {
			console.log(err);
		});
	}
}
