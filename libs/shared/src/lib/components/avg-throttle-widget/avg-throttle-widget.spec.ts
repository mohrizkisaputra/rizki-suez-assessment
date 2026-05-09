import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgThrottleWidget } from './avg-throttle-widget';

describe('AvgThrottleWidget', () => {
  let component: AvgThrottleWidget;
  let fixture: ComponentFixture<AvgThrottleWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgThrottleWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgThrottleWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
