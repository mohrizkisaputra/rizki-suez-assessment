// libs/shared/src/lib/services/sensor-stream.service.ts
import { Injectable, OnDestroy } from '@angular/core';
import { AirDensitySensorService } from '../services/air-density.service';
import { ThrottlePositionServices } from './throttle-position.service';
import { SpeedServices } from './speed.service';
import { TirePressureServices } from './tire-pressure.service';
import { SnapshotDataModel } from '../models/snapshot.models';
import { FuelEconomyCalculator  } from '../models/fuel-economy.model';
import { WeightDetailModel } from '../models/weight-detail.model';
import { MotorCycleDetailInfoModel } from '../models/motorcycle-detail.model';

@Injectable({ providedIn: 'root' })
export class OrchestratorServices implements OnDestroy {
  private intervalId!: ReturnType<typeof setInterval>;
  private index = 0;
  private weightData: WeightDetailModel | undefined;
  private motorcycleData: MotorCycleDetailInfoModel | undefined; 
  private distance = 0;

  constructor(
    private airDensityServices: AirDensitySensorService,
    private throttlePositionServices: ThrottlePositionServices,
    private speedServices: SpeedServices,
    private tirePressureServices: TirePressureServices,
  ) {}

  async initialize(weight: WeightDetailModel, motorcycle: MotorCycleDetailInfoModel, distance: number): Promise<void> {
    this.weightData     = weight;
    this.motorcycleData = motorcycle;
    this.distance = distance

    await Promise.all([
      this.airDensityServices.getAirDensityDetailData(),
      this.throttlePositionServices.getThrottlePositionData(),
      this.speedServices.getSpeedData(),
      this.tirePressureServices.getTirePressureData(),
    ]);
  }

  start(onSnapshot: (snapshot: SnapshotDataModel) => void): void {
    this.emit(onSnapshot);

    this.intervalId = setInterval(() => {
      this.emit(onSnapshot);
    }, 1000);
  }

  stop(): void {
    clearInterval(this.intervalId);
  }

  ngOnDestroy(): void {
    this.stop();
  }

  private emit(onSnapshot: (snapshot: SnapshotDataModel) => void): void {

    const airDensity = this.airDensityServices.next();
    const speed = this.speedServices.next();
    const throttlePosition = this.throttlePositionServices.next();
    const tirePressure = this.tirePressureServices.next();
    const weight = {
      cargoKg:  this.weightData?.cargoKg ?? 0,
      totalPersonKg:  this.weightData?.totalPersonKg ?? 0
    }
    const currentFuel = this.motorcycleData?.currentFuelCapacity ?? 0;

    const fuelEconomy = FuelEconomyCalculator.calculate(
      {
        temperatureCelsius: airDensity.temperatureCelsius,
        humidityPct: airDensity.humidityPct,
        pressureHpa: airDensity.pressureHpa,
      },
      { speedKmh: speed.speedKmh, rpm: speed.rpm },
      { throttlePct: throttlePosition.throttlePct },
      { frontPsi: tirePressure.frontPsi, rearPsi:  tirePressure.rearPsi },
      weight,
      currentFuel,
      this.distance
    );

    const snapshot: SnapshotDataModel = {
      airDensityData: airDensity,
      throttlePositionData: throttlePosition,
      speedData: speed,
      tirePressureData: tirePressure,
      fuelEconomyResult: fuelEconomy,
      index: this.index++,
      recordedAt: new Date(),
    };
    onSnapshot(snapshot);
  }
}