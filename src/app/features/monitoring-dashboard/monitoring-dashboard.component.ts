import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import { GoogleMapsModule, MapDirectionsService  } from '@angular/google-maps';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { 
  AirDensityWidget,
  AvgThrottleWidget,
  SpeedWidgetComponent,
  TirePressureWidgetComponent,
  WeightWidget 

} from '@shared';
import { MonitoringDashboardServices } from './services/monitoring-dashboard.services';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-monitoring-dashboard',
  standalone: true,
  imports: [ 
    GoogleMapsModule, 
    CardModule, 
    SplitterModule,
    DividerModule,
    AirDensityWidget,
    AvgThrottleWidget,
    SpeedWidgetComponent,
    TirePressureWidgetComponent,
    WeightWidget,
    AsyncPipe
  ],
  templateUrl: './monitoring-dashboard.component.html',
  styleUrl: './monitoring-dashboard.component.css'
})
export class MonitoringDashboardComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: -6.2088, lng: 106.8456 }; 
  zoom = 12;
  
  public distanceInKm = 0;
  private mapDirectionsServices = inject(MapDirectionsService);
  public directionsResults$: Observable<google.maps.DirectionsResult | undefined> | undefined;
  public directionsOptions: google.maps.DirectionsRendererOptions = {
    suppressPolylines: false,
    preserveViewport: false,
    polylineOptions: {
      strokeColor: '#a30000',
      strokeOpacity: 1.0,
      strokeWeight: 5,
      icons: [] 
    },
  };
  
  routeSample: any;

  constructor(private services: MonitoringDashboardServices) {}

  async ngOnInit() {
    try {
      this.routeSample = await this.services.getSampleRoute();
      if (this.routeSample) this.initMapsRoutes();
    } catch (err) {
      console.log(err)
    }

  }

  private async initMapsRoutes() {
    const routeSampleValue = this.routeSample?.Payload;
    const body: google.maps.DirectionsRequest = {
      origin: { lat: routeSampleValue.StartingPoint.lat, lng: routeSampleValue.StartingPoint.long },
      destination: { lat: routeSampleValue.DestinationPoint.lat, lng: routeSampleValue.DestinationPoint.long },
      travelMode: google.maps.TravelMode.TWO_WHEELER
    };

    this.directionsResults$ = await this.mapDirectionsServices.route(body).pipe(map(res => res.result));
    const estDistance = await this.getEstDistance();
    this.distanceInKm = (estDistance ?? 0) / 1000;
  }

  private async getEstDistance() {
    const { RouteMatrix } = await google.maps.importLibrary("routes");
    const request = {
      origins: [{ 
        location: { 
          lat: this.routeSample?.Payload?.StartingPoint?.lat, 
          lng: this.routeSample?.Payload.StartingPoint.long 
        } 
      }],
      destinations: [{ 
        location: { 
          lat: this.routeSample?.Payload?.DestinationPoint?.lat, 
          lng: this.routeSample?.Payload?.DestinationPoint?.long
        } 
      }],
      travelMode: google.maps.TravelMode.TWO_WHEELER,
      fields: ['distanceMeters'], 
    };

    try {
      const response = await RouteMatrix.computeRouteMatrix(request);
      const distanceInM = response.matrix.rows[0].items[0].distanceMeters;
      return distanceInM;
    } catch (e) {
      console.error("Gagal menghitung jarak:", e);
      return 0
    }
  }
  
}
