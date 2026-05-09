import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirDensityWidget } from './air-density-widget';

describe('AirDensityWidget', () => {
  let component: AirDensityWidget;
  let fixture: ComponentFixture<AirDensityWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirDensityWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirDensityWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
