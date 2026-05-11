import { AirDensityModel } from './air-density.model';
import { ThrottlePositionModel } from './throttle-position.model';

export interface SnapshotDataModel {
  airDensityData: AirDensityModel;
  throttlePositionData: ThrottlePositionModel;
  index: number;
  recordedAt: Date;
}