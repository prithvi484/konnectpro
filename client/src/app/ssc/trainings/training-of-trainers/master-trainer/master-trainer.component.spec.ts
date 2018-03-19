import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTrainerComponent } from './master-trainer.component';

describe('MasterTrainerComponent', () => {
	let component: MasterTrainerComponent;
	let fixture: ComponentFixture<MasterTrainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MasterTrainerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MasterTrainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
