import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

declare class SharedService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SharedService>;
}

interface TirePressureModel {
    aggregateId: string;
    frontPsi: number;
    rearPsi: number;
}

declare class TirePressureWidgetComponent {
    data: TirePressureModel | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<TirePressureWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TirePressureWidgetComponent, "lib-tire-pressure-widget", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}

interface SpeedModel {
    aggregateId: string;
    speedKmh: number;
    rpm: number;
}

declare class SpeedWidgetComponent {
    data: SpeedModel | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpeedWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpeedWidgetComponent, "lib-speed-widget", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}

interface ThrottlePositionModel {
    aggregateId: string;
    throttlePct: number;
    maxThrottlePct: number;
}

declare class AvgThrottleWidgetComponent {
    data: ThrottlePositionModel | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvgThrottleWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvgThrottleWidgetComponent, "lib-avg-throttle-widget", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}

interface AirDensityModel {
    aggregateId: string;
    temperatureCelsius: number;
    humidityPct: number;
    pressureHpa: number;
}

declare class AirDensityWidgetComponent {
    data: AirDensityModel | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<AirDensityWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AirDensityWidgetComponent, "lib-air-density-widget", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}

declare class FuelConsumptionWidgetComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<FuelConsumptionWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FuelConsumptionWidgetComponent, "lib-fuel-consumption-widget", never, {}, {}, never, never, true, never>;
}

interface WeightDetailModel {
    person: number;
    totalPersonKg: number;
    cargoKg: number;
}

declare class WeightWidgetComponent {
    data: WeightDetailModel | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<WeightWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WeightWidgetComponent, "lib-weight-widget", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}

declare class AppHeader {
    headerItems: MenuItem[] | undefined;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppHeader, "lib-app-header", never, {}, {}, never, never, true, never>;
}

interface SnapshotDataModel {
    airDensityData: AirDensityModel;
    throttlePositionData: ThrottlePositionModel;
    speedData: SpeedModel;
    tirePressureData: TirePressureModel;
    index: number;
    recordedAt: Date;
}

declare class AirDensitySensorService {
    private http;
    private data;
    private index;
    constructor(http: HttpClient);
    getAirDensityDetailData(): Promise<void>;
    next(): AirDensityModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AirDensitySensorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AirDensitySensorService>;
}

declare class ThrottlePositionServices {
    private http;
    private data;
    private index;
    constructor(http: HttpClient);
    getThrottlePositionData(): Promise<void>;
    next(): ThrottlePositionModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThrottlePositionServices, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThrottlePositionServices>;
}

declare class SpeedServices {
    private http;
    private data;
    private index;
    constructor(http: HttpClient);
    getSpeedData(): Promise<void>;
    next(): SpeedModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpeedServices, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SpeedServices>;
}

declare class TirePressureServices {
    private http;
    private data;
    private index;
    constructor(http: HttpClient);
    getTirePressureData(): Promise<void>;
    next(): TirePressureModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TirePressureServices, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TirePressureServices>;
}

declare class OrchestratorServices implements OnDestroy {
    private airDensity;
    private throttlePosition;
    private speed;
    private tirePressure;
    private intervalId;
    private index;
    constructor(airDensity: AirDensitySensorService, throttlePosition: ThrottlePositionServices, speed: SpeedServices, tirePressure: TirePressureServices);
    initialize(): Promise<void>;
    start(onSnapshot: (snapshot: SnapshotDataModel) => void): void;
    stop(): void;
    ngOnDestroy(): void;
    private emit;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrchestratorServices, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrchestratorServices>;
}

export { AirDensitySensorService, AirDensityWidgetComponent, AppHeader, AvgThrottleWidgetComponent, FuelConsumptionWidgetComponent, OrchestratorServices, SharedService, SpeedServices, SpeedWidgetComponent, ThrottlePositionServices, TirePressureServices, TirePressureWidgetComponent, WeightWidgetComponent };
export type { AirDensityModel, SnapshotDataModel, SpeedModel, ThrottlePositionModel, TirePressureModel, WeightDetailModel };
