import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirDensityWidgetComponent } from './air-density-widget.component';

describe('AirDensityWidgetComponent', () => {
  let component: AirDensityWidgetComponent;
  let fixture: ComponentFixture<AirDensityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirDensityWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirDensityWidgetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
