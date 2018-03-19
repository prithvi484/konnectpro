import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQpComponent } from './create-qp.component';

describe('CreateQpComponent', () => {
  let component: CreateQpComponent;
  let fixture: ComponentFixture<CreateQpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
