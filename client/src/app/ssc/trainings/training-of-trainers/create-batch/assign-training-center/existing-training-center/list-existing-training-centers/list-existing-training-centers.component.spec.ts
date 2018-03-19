import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExistingTrainingCentersComponent } from './list-existing-training-centers.component';

describe('ListExistingTrainingCentersComponent', () => {
	let component: ListExistingTrainingCentersComponent;
	let fixture: ComponentFixture<ListExistingTrainingCentersComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ListExistingTrainingCentersComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListExistingTrainingCentersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
