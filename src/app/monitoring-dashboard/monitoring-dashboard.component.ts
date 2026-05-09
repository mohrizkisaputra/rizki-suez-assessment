import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-monitoring-dashboard',
  standalone: true,
  imports: [ GoogleMapsModule ],
  templateUrl: './monitoring-dashboard.component.html',
  styleUrl: './monitoring-dashboard.component.css'
})
export class MonitoringDashboardComponent {
    center: google.maps.LatLngLiteral = { lat: -6.2088, lng: 106.8456 }; 
    zoom = 12;
}
