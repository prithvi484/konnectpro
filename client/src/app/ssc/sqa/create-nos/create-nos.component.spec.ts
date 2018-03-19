import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNosComponent } from './create-nos.component';

describe('CreateNosComponent', () => {
  let component: CreateNosComponent;
  let fixture: ComponentFixture<CreateNosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
