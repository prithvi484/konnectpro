import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTrainingCenterComponent } from './add-new-training-center.component';

describe('AddNewTrainingCenterComponent', () => {
  let component: AddNewTrainingCenterComponent;
  let fixture: ComponentFixture<AddNewTrainingCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTrainingCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTrainingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
