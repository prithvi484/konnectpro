import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNsdfadminComponent } from './create-nsdfadmin.component';

describe('CreateNsdfadminComponent', () => {
  let component: CreateNsdfadminComponent;
  let fixture: ComponentFixture<CreateNsdfadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNsdfadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNsdfadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
