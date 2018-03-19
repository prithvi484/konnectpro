import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqaComponent } from './sqa.component';

describe('SqaComponent', () => {
  let component: SqaComponent;
  let fixture: ComponentFixture<SqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
