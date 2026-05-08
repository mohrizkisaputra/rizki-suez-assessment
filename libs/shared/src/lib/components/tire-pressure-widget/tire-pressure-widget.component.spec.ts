import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirePressureWidgetComponent } from './tire-pressure-widget.component';

describe('TirePressureWidgetComponent', () => {
  let component: TirePressureWidgetComponent;
  let fixture: ComponentFixture<TirePressureWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TirePressureWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirePressureWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
