import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelConsumptionWidget } from './fuel-consumption-widget';

describe('FuelConsumptionWidget', () => {
  let component: FuelConsumptionWidget;
  let fixture: ComponentFixture<FuelConsumptionWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelConsumptionWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelConsumptionWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
