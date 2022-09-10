import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleOpenCloseComponent } from './toggle-open-close.component';

describe('ToggleOpenCloseComponent', () => {
  let component: ToggleOpenCloseComponent;
  let fixture: ComponentFixture<ToggleOpenCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleOpenCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleOpenCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
