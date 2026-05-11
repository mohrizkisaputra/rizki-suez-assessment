import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SpeedModel } from '../../models/speed.model';

@Component({
  selector: 'lib-speed-widget',
  standalone: true,
  imports: [ CardModule ],
  templateUrl: './speed-widget.component.html',
  styleUrl: './speed-widget.component.css'
})
export class SpeedWidgetComponent {
    @Input() data: SpeedModel| undefined;
}
