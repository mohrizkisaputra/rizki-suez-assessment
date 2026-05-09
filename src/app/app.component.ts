import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from '@shared'
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { MonitoringDashboardComponent } from './monitoring-dashboard/monitoring-dashboard.component';
import { TirePressureWidgetComponent, SpeedWidgetComponent } from '@shared';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ 
    RouterOutlet, 
    AppHeader,
    MonitoringDashboardComponent,
    TirePressureWidgetComponent,
    SpeedWidgetComponent,
    DividerModule,
    SplitterModule,
    CardModule
  ],
})
export class AppComponent {
  title = 'suez-assessment';
}
