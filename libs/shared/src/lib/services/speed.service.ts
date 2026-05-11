import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SpeedModel } from '../models/speed.model';

@Injectable({ providedIn: 'root' })

export class SpeedServices {
    private data: SpeedModel[] = [];
    private index = 0;

    constructor(private http: HttpClient) {}

    async getSpeedData(): Promise<void> {
        const response = await this.http.get<{ Payload: SpeedModel[] }>('data/speedData.json');
        this.data = (await firstValueFrom(response)).Payload;
    }

    next(): SpeedModel {
        const responseData = this.data[this.index];
        this.index = (this.index + 1) % this.data.length;
        return responseData;
    }
}