import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingTrainingCenterComponent } from './existing-training-center.component';

describe('ExistingTrainingCenterComponent', () => {
  let component: ExistingTrainingCenterComponent;
  let fixture: ComponentFixture<ExistingTrainingCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingTrainingCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingTrainingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
