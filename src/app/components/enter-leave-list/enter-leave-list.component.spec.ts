import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLeaveListComponent } from './enter-leave-list.component';

describe('EnterLeaveListComponent', () => {
  let component: EnterLeaveListComponent;
  let fixture: ComponentFixture<EnterLeaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterLeaveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLeaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
