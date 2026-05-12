import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MotorCycleDetailInfoModel } from '../../models';

@Component({
  selector: 'lib-motorcycle-detail-info',
  imports: [ CardModule ],
  templateUrl: './motorcycle-detail-info.component.html',
  styleUrl: './motorcycle-detail-info.component.css',
})
export class MotorcycleDetailInfoComponent {
  @Input() data : MotorCycleDetailInfoModel | undefined;
}
