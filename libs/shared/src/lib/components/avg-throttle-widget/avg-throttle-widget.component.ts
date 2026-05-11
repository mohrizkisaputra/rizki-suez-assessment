import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ThrottlePositionModel } from '../../models/throttle-position.model';

@Component({
  selector: 'lib-avg-throttle-widget',
  imports: [ CardModule ],
  templateUrl: './avg-throttle-widget.component.html',
  styleUrl: './avg-throttle-widget.component.css',
})
export class AvgThrottleWidgetComponent {
  @Input() data: ThrottlePositionModel | undefined;
}
