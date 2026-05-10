import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MonitoringDashboardComponent } from './app/features/monitoring-dashboard/monitoring-dashboard.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
