import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public options = {
		tot: {
			name: 'tot',
			headerTitle: 'Training of Trainers',
			subTitle: 'Here you can view add, edit, assign Batches to trainers'
		}
	};
	public selectedOption = this.options['tot'];
	constructor() { }

	ngOnInit() {
	}
	setSelectedOption(selectedOption) {
		this.selectedOption = this.options[selectedOption];
	}

}
