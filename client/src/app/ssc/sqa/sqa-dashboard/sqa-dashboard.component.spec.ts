import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqaDashboardComponent } from './sqa-dashboard.component';

describe('SqaDashboardComponent', () => {
  let component: SqaDashboardComponent;
  let fixture: ComponentFixture<SqaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
