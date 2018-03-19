import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleBatchComponent } from './schedule-batch.component';

describe('ScheduleBatchComponent', () => {
	let component: ScheduleBatchComponent;
	let fixture: ComponentFixture<ScheduleBatchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ScheduleBatchComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ScheduleBatchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
