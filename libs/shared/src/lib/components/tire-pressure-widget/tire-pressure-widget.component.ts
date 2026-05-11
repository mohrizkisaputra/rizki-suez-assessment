import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TirePressureModel } from '../../models/tire-pressure.model';

@Component({
  selector: 'lib-tire-pressure-widget',
  standalone: true,
  imports: [ CardModule ],
  templateUrl: './tire-pressure-widget.component.html',
  styleUrl: './tire-pressure-widget.component.css'
})
export class TirePressureWidgetComponent {
  @Input() data: TirePressureModel | undefined
}
