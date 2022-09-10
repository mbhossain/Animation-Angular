import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLeaveListShowComponent } from './enter-leave-list-show.component';

describe('EnterLeaveListShowComponent', () => {
  let component: EnterLeaveListShowComponent;
  let fixture: ComponentFixture<EnterLeaveListShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterLeaveListShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLeaveListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
