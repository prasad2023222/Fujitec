import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCelebrationsComponent } from './employee-celebrations.component';

describe('EmployeeCelebrationsComponent', () => {
  let component: EmployeeCelebrationsComponent;
  let fixture: ComponentFixture<EmployeeCelebrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCelebrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCelebrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
