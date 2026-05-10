import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelConsumptionWidgetComponent } from './fuel-consumption-widget.component';

describe('FuelConsumptionWidgetComponent', () => {
  let component: FuelConsumptionWidgetComponent;
  let fixture: ComponentFixture<FuelConsumptionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelConsumptionWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelConsumptionWidgetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
