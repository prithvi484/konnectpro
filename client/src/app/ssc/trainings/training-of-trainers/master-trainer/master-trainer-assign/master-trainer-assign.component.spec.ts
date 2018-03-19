import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MasterTrainerService } from './../../../../../services/API/master-trainer.service';
import { MasterTrainerAssignComponent } from './master-trainer-assign.component';

describe('MasterTrainerAssignComponent', () => {
	let component: MasterTrainerAssignComponent;
	let fixture: ComponentFixture<MasterTrainerAssignComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MasterTrainerAssignComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MasterTrainerAssignComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
