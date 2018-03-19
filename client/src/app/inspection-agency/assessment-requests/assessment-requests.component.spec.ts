import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentRequestsComponent } from './assessment-requests.component';

describe('AssessmentRequestsComponent', () => {
  let component: AssessmentRequestsComponent;
  let fixture: ComponentFixture<AssessmentRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
