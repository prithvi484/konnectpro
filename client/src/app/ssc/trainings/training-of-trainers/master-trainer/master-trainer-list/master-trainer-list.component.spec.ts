import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTrainerListComponent } from './master-trainer-list.component';

describe('MasterTrainerListComponent', () => {
	let component: MasterTrainerListComponent;
	let fixture: ComponentFixture<MasterTrainerListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MasterTrainerListComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MasterTrainerListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
