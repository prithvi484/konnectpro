import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTrainingCenterComponent } from './assign-training-center.component';

describe('AssignTrainingCenterComponent', () => {
  let component: AssignTrainingCenterComponent;
  let fixture: ComponentFixture<AssignTrainingCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTrainingCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTrainingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
