import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightWidget } from './weight-widget';

describe('WeightWidget', () => {
  let component: WeightWidget;
  let fixture: ComponentFixture<WeightWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
