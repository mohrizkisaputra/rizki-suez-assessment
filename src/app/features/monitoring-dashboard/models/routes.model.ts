import { LatLongModels } from './latlng.model';

export interface RoutesModels { 
    Payload: {
        StartingPoint: LatLongModels;
        DestinationPoint: LatLongModels;
    };
}