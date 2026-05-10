import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightWidgetComponent } from './weight-widget.component';

describe('WeightWidgetComponent', () => {
  let component: WeightWidgetComponent;
  let fixture: ComponentFixture<WeightWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightWidgetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
