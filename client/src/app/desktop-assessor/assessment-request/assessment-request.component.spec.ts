import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentRequestComponent } from './assessment-request.component';

describe('AssessmentRequestComponent', () => {
  let component: AssessmentRequestComponent;
  let fixture: ComponentFixture<AssessmentRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
