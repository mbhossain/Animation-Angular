import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCalculationComponent } from './auto-calculation.component';

describe('AutoCalculationComponent', () => {
  let component: AutoCalculationComponent;
  let fixture: ComponentFixture<AutoCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
