import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleAnimationComponent } from './toggle-animation.component';

describe('ToggleAnimationComponent', () => {
  let component: ToggleAnimationComponent;
  let fixture: ComponentFixture<ToggleAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
