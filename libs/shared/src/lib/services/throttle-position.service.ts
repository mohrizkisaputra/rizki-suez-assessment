import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ThrottlePositionModel } from '../models/throttle-position.model';

@Injectable({ providedIn: 'root' })
export class ThrottlePositionServices {
    private data: ThrottlePositionModel[] = [];
    private index = 0;

    constructor(private http: HttpClient) {}

    async getThrottlePositionData(): Promise<void> {
        const response = await this.http.get<{ Payload: ThrottlePositionModel[] }>('data/throttlePositionData.json');
        this.data = (await firstValueFrom(response)).Payload;
    }

    next(): ThrottlePositionModel {
        const responseData = this.data[this.index];
        this.index = (this.index + 1) % this.data.length;
        return responseData;
    }
}