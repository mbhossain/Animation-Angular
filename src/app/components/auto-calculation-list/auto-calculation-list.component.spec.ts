import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCalculationListComponent } from './auto-calculation-list.component';

describe('AutoCalculationListComponent', () => {
  let component: AutoCalculationListComponent;
  let fixture: ComponentFixture<AutoCalculationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCalculationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCalculationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
