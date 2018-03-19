import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpRegistrationComponent } from './tp-registration.component';

describe('TpRegistrationComponent', () => {
  let component: TpRegistrationComponent;
  let fixture: ComponentFixture<TpRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
