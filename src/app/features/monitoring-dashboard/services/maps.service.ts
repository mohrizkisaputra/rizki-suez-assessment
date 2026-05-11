import { Injectable, inject } from '@angular/core';
import { GoogleMapsModule, MapDirectionsService  } from '@angular/google-maps';
import { Observable, firstValueFrom, map } from 'rxjs';
import { DirectionModels } from '../models/direction.model';
import { RoutesModels } from '../models/routes.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MapServices {
    constructor(private http: HttpClient) {}
    
    private mapDirectionsServices = inject(MapDirectionsService);

    async getSampleRoute(): Promise<DirectionModels> {
        let response: DirectionModels | undefined;
        const data = await firstValueFrom( this.http.get<RoutesModels>('data/mapsDirection.json') );
        response = {
            origin: {
                lat: data?.Payload.StartingPoint.lat,
                lng: data?.Payload.StartingPoint.long,
            },
            destination: {
                lat: data?.Payload.DestinationPoint.lat,
                lng: data?.Payload.DestinationPoint.long,
            },
        }
        return response;
    }

    getMapsDirection(params: DirectionModels): Observable<google.maps.DirectionsResult | undefined> {
        const body: google.maps.DirectionsRequest = {
            origin: params?.origin ,
            destination: params?.destination,
            travelMode: google.maps.TravelMode.DRIVING,
            drivingOptions: {
                departureTime: new Date(),
                trafficModel: google.maps.TrafficModel.BEST_GUESS
            },
            provideRouteAlternatives: true
        };

        return this.mapDirectionsServices.route(body).pipe(map(res => res.result));
    }

    async getDistanceM(params: DirectionModels): Promise<any> {
        const { RouteMatrix } = await google.maps.importLibrary("routes");
        const request = {
            origins: [{
                location: params?.origin
            }],
            destinations: [{ 
                location: params?.destination
            }],
            travelMode: google.maps.TravelMode.TWO_WHEELER,
            fields: ['distanceMeters'], 
        };

        try {
            const response = await RouteMatrix.computeRouteMatrix(request);
            return response.matrix.rows[0].items[0].distanceMeters;
        } catch (e) {
            console.error("Failed to get distance:", e);
            return 0
        }
    }
       
}