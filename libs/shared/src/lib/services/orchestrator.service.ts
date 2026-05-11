// libs/shared/src/lib/services/sensor-stream.service.ts
import { Injectable, OnDestroy } from '@angular/core';
import { AirDensitySensorService } from './../services/air-density.service';
import { ThrottlePositionServices } from './throttle-position.service';
import { SnapshotDataModel } from './../models/snapshot.models';

@Injectable({ providedIn: 'root' })
export class OrchestratorServices implements OnDestroy {
  private intervalId!: ReturnType<typeof setInterval>;
  private index = 0;

  constructor(
    private airDensity: AirDensitySensorService,
    private throttlePosition: ThrottlePositionServices
  ) {}

  async initialize(): Promise<void> {
    await Promise.all([
      this.airDensity.getAirDensityDetailData(),
      this.throttlePosition.getThrottlePositionData()
    ]);
  }

  start(onSnapshot: (snapshot: SnapshotDataModel) => void): void {
    this.emit(onSnapshot);

    this.intervalId = setInterval(() => {
      this.emit(onSnapshot);
    }, 5000);
  }

  stop(): void {
    clearInterval(this.intervalId);
  }

  ngOnDestroy(): void {
    this.stop();
  }

  private emit(onSnapshot: (snapshot: SnapshotDataModel) => void): void {
    const snapshot: SnapshotDataModel = {
      airDensityData: this.airDensity.next(),
      throttlePositionData: this.throttlePosition.next(),
      index: this.index++,
      recordedAt: new Date(),
    };
    onSnapshot(snapshot);
  }
}