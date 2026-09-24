import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAwarenessComponent } from './it-awareness.component';

describe('ItAwarenessComponent', () => {
  let component: ItAwarenessComponent;
  let fixture: ComponentFixture<ItAwarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItAwarenessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
