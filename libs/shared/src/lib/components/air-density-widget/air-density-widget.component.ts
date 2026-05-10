import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AirDensityModel } from '../../models/air-density.model';

@Component({
  selector: 'lib-air-density-widget',
  imports: [ CardModule ],
  templateUrl: './air-density-widget.component.html',
  styleUrl: './air-density-widget.component.css',
})
export class AirDensityWidgetComponent {
  @Input() data: AirDensityModel | undefined;
}
