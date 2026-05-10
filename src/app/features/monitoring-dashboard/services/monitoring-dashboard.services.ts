import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class MonitoringDashboardServices {
    constructor(private http: HttpClient) {}

    async getSampleRoute(): Promise<any> {
        const response = this.http.get('data/mapsDirection.json');
        return await firstValueFrom(response);
    }

    async getMotorcycleDetailInfo(): Promise<any> {
        const response = this.http.get('data/motorcycleData.json');
        return await firstValueFrom(response);
    }

    async getWheightDetailInfo(): Promise<any> {
        const response = this.http.get('data/weightData.json');
        return await firstValueFrom(response);
    }
}