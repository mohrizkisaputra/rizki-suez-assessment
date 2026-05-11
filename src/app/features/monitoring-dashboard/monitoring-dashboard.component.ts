import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common'
import { GoogleMapsModule, MapDirectionsService  } from '@angular/google-maps';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { Observable, map } from 'rxjs';
import { 
  AirDensityWidgetComponent,
  AvgThrottleWidgetComponent,
  SpeedWidgetComponent,
  TirePressureWidgetComponent,
  WeightWidgetComponent,

  WeightDetailModel,
  SnapshotDataModel,

  OrchestratorServices
} from '@shared';
import { MonitoringDashboardServices } from './services/monitoring-dashboard.services'; 
import { MotorCycleDetailInfoModel } from '../../domain/models/motorcycle-detail.model';
import { MapServices } from './services/maps.service';
import { DirectionModels } from './models/direction.model';
@Component({
  selector: 'app-monitoring-dashboard',
  standalone: true,
  imports: [ 
    GoogleMapsModule, 
    CardModule, 
    SplitterModule,
    DividerModule,
    AirDensityWidgetComponent,
    AvgThrottleWidgetComponent,
    SpeedWidgetComponent,
    TirePressureWidgetComponent,
    WeightWidgetComponent,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './monitoring-dashboard.component.html',
  styleUrl: './monitoring-dashboard.component.css'
})
export class MonitoringDashboardComponent implements OnInit, OnDestroy {

  public googleMapsLoad = false;
  public center: google.maps.LatLngLiteral = { lat: -6.2088, lng: 106.8456 }; 
  public zoom = 12;
  public distanceInKm = 0;
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

  routeSample: DirectionModels | undefined;
  motorCycleDetailInfo: MotorCycleDetailInfoModel | undefined;
  weightDetailsInfo: WeightDetailModel | undefined;

  snapshot: SnapshotDataModel | null = null;

  constructor(
    private services: MonitoringDashboardServices, 
    private orchServices: OrchestratorServices,
    private mapsServices: MapServices
  ) {}

  async ngOnInit() {
    const [motorcycleData, weightData] = await Promise.all([
      this.services.getMotorcycleDetailInfo(),
      this.services.getWheightDetailInfo(),
    ]);
    
    this.motorCycleDetailInfo = motorcycleData.Payload;
    this.weightDetailsInfo = weightData.Payload;
    
    await this.initMapsData()

    await this.orchServices.initialize();
    this.orchServices.start(response => {
      this.snapshot = response;
    });
  }

  ngOnDestroy() {
    this.orchServices.stop();
  }

  private async initMapsData() {
    this.routeSample = await this.mapsServices.getSampleRoute();
    if (this.routeSample) {
      this.directionsResults$ = this.mapsServices.getMapsDirection(this.routeSample);
      this.distanceInKm = (await this.mapsServices.getDistanceM(this.routeSample) ?? 0) / 1000;
    }
  }
}
