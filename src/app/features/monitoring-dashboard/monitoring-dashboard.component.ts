import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common'
import { GoogleMapsModule, MapDirectionsService  } from '@angular/google-maps';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { Observable, map } from 'rxjs';
import { 
  AirDensityWidget,
  AvgThrottleWidget,
  SpeedWidgetComponent,
  TirePressureWidgetComponent,
  WeightWidget,
  WeightDetailModel
} from '@shared';
import { MonitoringDashboardServices } from './services/monitoring-dashboard.services';
import { MotorCycleDetailInfoModel } from '../../domain/models/motorcycle-detail.model';

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
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './monitoring-dashboard.component.html',
  styleUrl: './monitoring-dashboard.component.css'
})
export class MonitoringDashboardComponent implements OnInit {

  googleMapsLoad = false;
  center: google.maps.LatLngLiteral = { lat: -6.2088, lng: 106.8456 }; 
  zoom = 12;
  
  public distanceInKm = 0;
  private mapDirectionsServices = inject(MapDirectionsService);
  public directionsResults$: Observable<google.maps.DirectionsResult | undefined> | undefined;
  public directionsOptions: google.maps.DirectionsRendererOptions = {
    suppressPolylines: false,
    preserveViewport: false,
    polylineOptions: {
      strokeColor: '#0026a3',
      strokeOpacity: 1.0,
      strokeWeight: 5,
      icons: [] 
    },
  };
  
  routeSample: any;
  motorCycleDetailInfo: MotorCycleDetailInfoModel | undefined;
  weightDetailsInfo: WeightDetailModel | undefined;

  constructor(private services: MonitoringDashboardServices) {

  }

  async ngOnInit() {
    try {
      this.routeSample = await this.services.getSampleRoute();
      const motorcycleData = await this.services.getMotorcycleDetailInfo();
      const weightData = await this.services.getWheightDetailInfo();

      this.motorCycleDetailInfo = motorcycleData.Payload;
      this.weightDetailsInfo = weightData.Payload;
      if (this.routeSample) this.initMapsRoutes();

      
    } catch (err) {
      console.log(err)
    }

  }

  private async initMapsRoutes() {
    const routeSampleValue = this.routeSample?.Payload;
    const body: google.maps.DirectionsRequest = {
      origin: { 
        lat: routeSampleValue.StartingPoint.lat, 
        lng: routeSampleValue.StartingPoint.long 
      },
      destination: { 
        lat: routeSampleValue.DestinationPoint.lat, 
        lng: routeSampleValue.DestinationPoint.long 
      },
      travelMode: google.maps.TravelMode.DRIVING,
      drivingOptions: {
        departureTime: new Date(),
        trafficModel: google.maps.TrafficModel.BEST_GUESS
      },
      provideRouteAlternatives: true
    };

    this.directionsResults$ = await this.mapDirectionsServices.route(body).pipe(map(res => res.result));
    this.distanceInKm = (await this.getEstDistance() ?? 0) / 1000;
    console.log('this.distanceInKm', this.distanceInKm);
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
      return response.matrix.rows[0].items[0].distanceMeters;
    } catch (e) {
      console.error("Gagal menghitung jarak:", e);
      return 0
    }
  }
  
}
