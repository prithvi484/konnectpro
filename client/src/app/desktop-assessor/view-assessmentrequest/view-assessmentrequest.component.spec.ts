import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssessmentreqComponent } from './view-assessmentrequest.component';

describe('ViewAssessmentreqComponent', () => {
  let component: ViewAssessmentreqComponent;
  let fixture: ComponentFixture<ViewAssessmentreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAssessmentreqComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssessmentreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
