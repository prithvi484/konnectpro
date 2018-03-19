import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDaCommentsComponent } from './action-da-comments.component';

describe('ActionDaCommentsComponent', () => {
  let component: ActionDaCommentsComponent;
  let fixture: ComponentFixture<ActionDaCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDaCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDaCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
