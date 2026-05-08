import { Component } from '@angular/core';
import { TirePressureWidgetComponent, SpeedWidgetComponent } from '@shared';

@Component({
  selector: 'app-monitoring-dashboard',
  standalone: true,
  imports: [ TirePressureWidgetComponent, SpeedWidgetComponent ],
  templateUrl: './monitoring-dashboard.component.html',
  styleUrl: './monitoring-dashboard.component.css'
})
export class MonitoringDashboardComponent {

}
