import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FujitecGlanceComponent } from './fujitec-glance.component';

describe('FujitecGlanceComponent', () => {
  let component: FujitecGlanceComponent;
  let fixture: ComponentFixture<FujitecGlanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FujitecGlanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FujitecGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
