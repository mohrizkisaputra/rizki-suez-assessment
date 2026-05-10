import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgThrottleWidgetComponent } from './avg-throttle-widget.component';

describe('AvgThrottleWidgetComponent', () => {
  let component: AvgThrottleWidgetComponent;
  let fixture: ComponentFixture<AvgThrottleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgThrottleWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgThrottleWidgetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
