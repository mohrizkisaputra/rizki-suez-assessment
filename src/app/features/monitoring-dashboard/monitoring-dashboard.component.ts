import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common'
import { GoogleMapsModule  } from '@angular/google-maps';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { Observable } from 'rxjs';
import { 
  AirDensityWidgetComponent,
  AvgThrottleWidgetComponent,
  SpeedWidgetComponent,
  TirePressureWidgetComponent,
  FuelConsumptionWidgetComponent,
  WeightWidgetComponent,
  MotorcycleDetailInfoComponent,

  MotorCycleDetailInfoModel,
  WeightDetailModel,
  SnapshotDataModel,
  MonitoringAlert,

  OrchestratorServices
} from '@shared';
import { MonitoringDashboardServices } from './services/monitoring-dashboard.services';
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
    DialogModule,

    AirDensityWidgetComponent,
    AvgThrottleWidgetComponent,
    SpeedWidgetComponent,
    TirePressureWidgetComponent,
    WeightWidgetComponent,
    FuelConsumptionWidgetComponent,
    MotorcycleDetailInfoComponent,

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
  alertWarning: MonitoringAlert |undefined;
  alertWarningIcon: string | undefined;

  snapshot: SnapshotDataModel | null = null;
  showWarningDialog = false;

  constructor(
    private services: MonitoringDashboardServices, 
    private orchServices: OrchestratorServices,
    private mapsServices: MapServices
  ) {}

  async ngOnInit() {
    const [motorcycleData, weightData] = await Promise.all([
      this.services.getMotorcycleDetailInfo(),
      this.services.getWeightDetailInfo(),
    ]);
    
    this.motorCycleDetailInfo = motorcycleData.Payload;
    this.weightDetailsInfo = weightData.Payload;
    
    await this.initMapsData();
    await this.initData();
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

  private async initData() {
    if (!this.motorCycleDetailInfo || !this.weightDetailsInfo) {
      console.error('Missing motorcycle or weight detail data');
      return;
    }

    await this.orchServices.initialize(this.weightDetailsInfo, this.motorCycleDetailInfo, this.distanceInKm);
    this.orchServices.start(response => {
      this.snapshot = response;
    });
  }

  public warningHandler(event: any) {
    if (!event) return;
    this.alertWarning = event;
    
    if (event.type == 'temperature'){
      if (event.status == 'critical') this.showWarningDialog = true;
      this.alertWarningIcon = 'air-temperature';
    } else if (event.type == 'tire-pressure'){
      if (event.status !== 'normal') this.showWarningDialog = true;
      this.alertWarningIcon = 'tire-pressure';
    } 
  }
}
