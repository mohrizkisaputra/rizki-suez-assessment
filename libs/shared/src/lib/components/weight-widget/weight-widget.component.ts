import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { WeightDetailModel } from '../../models/weight-detail.model';

@Component({
  selector: 'lib-weight-widget',
  imports: [ CardModule ],
  standalone: true,
  templateUrl: './weight-widget.component.html',
  styleUrl: './weight-widget.component.css',
})
export class WeightWidgetComponent {
  @Input() data: WeightDetailModel | undefined;

}
