import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AirDensityModel } from '../models/air-density.model';

@Injectable({ providedIn: 'root' })
export class AirDensitySensorService {
  private readonly path = 'libs/shared/src/lib/data/airDensityData.json';
  private data: AirDensityModel[] = [];
  private index = 0;

  constructor(private http: HttpClient) {}

  async getAirDensityDetailData(): Promise<void> {
    const response = await this.http.get<{ Payload: AirDensityModel[] }>('data/airDensityData.json');
    this.data = (await firstValueFrom(response)).Payload;
  }

  next(): AirDensityModel {
    const responseData = this.data[this.index];
    this.index = (this.index + 1) % this.data.length;
    return responseData;
  }
}