import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { TirePressureModel } from '../models/tire-pressure.model';

@Injectable({ providedIn: 'root' })
export class TirePressureServices {
    private data: TirePressureModel[] = [];
    private index = 0;

    constructor(private http: HttpClient) {}

    async getTirePressureData(): Promise<void> {
        const response = await this.http.get<{ Payload: TirePressureModel[] }>('data/tirePressureData.json');
        this.data = (await firstValueFrom(response)).Payload;
    }

    next(): TirePressureModel {
        const responseData = this.data[this.index];
        this.index = (this.index + 1) % this.data.length;
        return responseData;
    }
}