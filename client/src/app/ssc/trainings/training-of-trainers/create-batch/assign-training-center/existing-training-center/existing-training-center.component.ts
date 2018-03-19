import { Component, OnInit, OnChanges } from '@angular/core';
@Component({
	selector: 'app-existing-training-center',
	templateUrl: './existing-training-center.component.html',
	styleUrls: ['./existing-training-center.component.css'],
})
export class ExistingTrainingCenterComponent implements OnInit, OnChanges {
	searchForTrainingCenter = true;
	scheduleBatch = false;
	constructor() { }
	ngOnChanges() {
		console.log('ssssssssss = ', this);
	}
	ngOnInit() { }
}
