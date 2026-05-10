import { AirDensityModel } from './air-density.model';

export interface SnapshotDataModel {
  airDensityData: AirDensityModel;
  index: number;
  recordedAt: Date;
}