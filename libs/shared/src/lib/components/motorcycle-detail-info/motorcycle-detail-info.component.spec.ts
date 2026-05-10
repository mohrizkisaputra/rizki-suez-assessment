import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleDetailInfoComponent } from './motorcycle-detail-info.component';

describe('MotorcycleDetailInfoComponent', () => {
  let component: MotorcycleDetailInfoComponent;
  let fixture: ComponentFixture<MotorcycleDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleDetailInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleDetailInfoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
