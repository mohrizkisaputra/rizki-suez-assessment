import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { WeightDetailModel } from '../../models/weight-detail.model';

@Component({
  selector: 'lib-weight-widget',
  imports: [ CardModule ],
  standalone: true,
  templateUrl: './weight-widget.html',
  styleUrl: './weight-widget.css',
})
export class WeightWidget {
  @Input() data: WeightDetailModel | undefined;

}
