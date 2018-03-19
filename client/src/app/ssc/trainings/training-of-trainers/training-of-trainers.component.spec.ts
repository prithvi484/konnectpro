import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOfTrainersComponent } from './training-of-trainers.component';

describe('TrainingOfTrainersComponent', () => {
  let component: TrainingOfTrainersComponent;
  let fixture: ComponentFixture<TrainingOfTrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOfTrainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOfTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
