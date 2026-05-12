import { AirDensityModel } from './air-density.model';
import { ThrottlePositionModel } from './throttle-position.model';
import { SpeedModel } from './speed.model';
import { TirePressureModel } from './tire-pressure.model';
import { FuelEconomyResult } from './fuel-economy.model';

export interface SnapshotDataModel {
  airDensityData: AirDensityModel;
  throttlePositionData: ThrottlePositionModel;
  speedData: SpeedModel;
  tirePressureData: TirePressureModel;
  fuelEconomyResult: FuelEconomyResult;
  index: number;
  recordedAt: Date;
}