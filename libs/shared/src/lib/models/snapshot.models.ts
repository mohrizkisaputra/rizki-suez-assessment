import { AirDensityModel } from './air-density.model';
import { ThrottlePositionModel } from './throttle-position.model';
import { SpeedModel } from './speed.model';

export interface SnapshotDataModel {
  airDensityData: AirDensityModel;
  throttlePositionData: ThrottlePositionModel;
  speedData: SpeedModel;
  index: number;
  recordedAt: Date;
}