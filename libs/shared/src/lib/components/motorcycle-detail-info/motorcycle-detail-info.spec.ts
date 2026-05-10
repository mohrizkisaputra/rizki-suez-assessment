import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleDetailInfo } from './motorcycle-detail-info';

describe('MotorcycleDetailInfo', () => {
  let component: MotorcycleDetailInfo;
  let fixture: ComponentFixture<MotorcycleDetailInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleDetailInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleDetailInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
