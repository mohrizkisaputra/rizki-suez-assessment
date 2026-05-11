import * as i0 from '@angular/core';
import { Injectable, Input, Component } from '@angular/core';
import * as i1 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i1$1 from 'primeng/menubar';
import { MenubarModule } from 'primeng/menubar';
import { firstValueFrom } from 'rxjs';
import * as i1$2 from '@angular/common/http';

class SharedService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: SharedService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class TirePressureWidgetComponent {
    data;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: TirePressureWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.12", type: TirePressureWidgetComponent, isStandalone: true, selector: "lib-tire-pressure-widget", inputs: { data: "data" }, ngImport: i0, template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n             <div>\r\n                <div>Front Tire Pressure {{data?.frontPsi}}</div>\r\n                <div>Rear Tire Pressure {{data?.rearPsi}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>result</div>\r\n        </div>\r\n    </div>\r\n</p-card>", styles: [""], dependencies: [{ kind: "ngmodule", type: CardModule }, { kind: "component", type: i1.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: TirePressureWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-tire-pressure-widget', standalone: true, imports: [CardModule], template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n             <div>\r\n                <div>Front Tire Pressure {{data?.frontPsi}}</div>\r\n                <div>Rear Tire Pressure {{data?.rearPsi}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>result</div>\r\n        </div>\r\n    </div>\r\n</p-card>" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

class SpeedWidgetComponent {
    data;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: SpeedWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.12", type: SpeedWidgetComponent, isStandalone: true, selector: "lib-speed-widget", inputs: { data: "data" }, ngImport: i0, template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n             <div>\r\n                <div>RPM {{data?.rpm}}</div>\r\n                <div>Speed {{data?.speedKmh}} Km/h</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>result</div>\r\n        </div>\r\n    </div>\r\n</p-card>", styles: [""], dependencies: [{ kind: "ngmodule", type: CardModule }, { kind: "component", type: i1.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: SpeedWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-speed-widget', standalone: true, imports: [CardModule], template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n             <div>\r\n                <div>RPM {{data?.rpm}}</div>\r\n                <div>Speed {{data?.speedKmh}} Km/h</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>result</div>\r\n        </div>\r\n    </div>\r\n</p-card>" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

class AvgThrottleWidgetComponent {
    data;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: AvgThrottleWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.12", type: AvgThrottleWidgetComponent, isStandalone: true, selector: "lib-avg-throttle-widget", inputs: { data: "data" }, ngImport: i0, template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n             <div>\r\n                <div>Throttle Position {{data?.throttlePct}}</div>\r\n                <div>Max Throttle Position {{data?.maxThrottlePct}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>result</div>\r\n        </div>\r\n    </div>\r\n</p-card>", styles: [""], dependencies: [{ kind: "ngmodule", type: CardModule }, { kind: "component", type: i1.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: AvgThrottleWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-avg-throttle-widget', imports: [CardModule], template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n             <div>\r\n                <div>Throttle Position {{data?.throttlePct}}</div>\r\n                <div>Max Throttle Position {{data?.maxThrottlePct}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>result</div>\r\n        </div>\r\n    </div>\r\n</p-card>" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

class AirDensityWidgetComponent {
    data;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: AirDensityWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.12", type: AirDensityWidgetComponent, isStandalone: true, selector: "lib-air-density-widget", inputs: { data: "data" }, ngImport: i0, template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n             <div>\r\n                <div>Temperature {{data?.temperatureCelsius}}</div>\r\n                <div>Humidity {{data?.humidityPct}}</div>\r\n                <div>Air Pressure {{data?.pressureHpa}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>result</div>\r\n        </div>\r\n    </div>\r\n</p-card>", styles: [""], dependencies: [{ kind: "ngmodule", type: CardModule }, { kind: "component", type: i1.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: AirDensityWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-air-density-widget', imports: [CardModule], template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n             <div>\r\n                <div>Temperature {{data?.temperatureCelsius}}</div>\r\n                <div>Humidity {{data?.humidityPct}}</div>\r\n                <div>Air Pressure {{data?.pressureHpa}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>result</div>\r\n        </div>\r\n    </div>\r\n</p-card>" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

class FuelConsumptionWidgetComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: FuelConsumptionWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.12", type: FuelConsumptionWidgetComponent, isStandalone: true, selector: "lib-fuel-consumption-widget", ngImport: i0, template: "<p>fuel-consumption-widget works!</p>\r\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: FuelConsumptionWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-fuel-consumption-widget', imports: [], template: "<p>fuel-consumption-widget works!</p>\r\n" }]
        }] });

class WeightWidgetComponent {
    data;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: WeightWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.12", type: WeightWidgetComponent, isStandalone: true, selector: "lib-weight-widget", inputs: { data: "data" }, ngImport: i0, template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <img src=\"person/{{data?.person}}-person.svg\" class=\"w-8rem\" alt=\"Fuel Capacity\"/>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>\r\n                <div>Total Person {{data?.person}}</div>\r\n                <div>Person Weight {{data?.totalPersonKg}}</div>\r\n                <div>Laguage Weight {{data?.cargoKg}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-card>", styles: [""], dependencies: [{ kind: "ngmodule", type: CardModule }, { kind: "component", type: i1.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: WeightWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-weight-widget', imports: [CardModule], standalone: true, template: "<p-card class=\"p-2 h-10rem\">\r\n    <div class=\"grid\">\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <img src=\"person/{{data?.person}}-person.svg\" class=\"w-8rem\" alt=\"Fuel Capacity\"/>\r\n        </div>\r\n        <div class=\"col flex justify-content-left align-items-center\">\r\n            <div>\r\n                <div>Total Person {{data?.person}}</div>\r\n                <div>Person Weight {{data?.totalPersonKg}}</div>\r\n                <div>Laguage Weight {{data?.cargoKg}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-card>" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

class AppHeader {
    headerItems;
    ngOnInit() {
        // this.headerItems = [
        // ]
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: AppHeader, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.12", type: AppHeader, isStandalone: true, selector: "lib-app-header", ngImport: i0, template: "\r\n    <p-menubar class=\"mb-2\">\r\n        <ng-template #start>\r\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n                <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n                <g id=\"SVGRepo_iconCarrier\"> \r\n                    <path d=\"M14.25 12C14.25 11.0335 15.0335 10.25 16 10.25C16.9665 10.25 17.75 11.0335 17.75 12C17.75 12.9665 16.9665 13.75 16 13.75C15.0335 13.75 14.25 12.9665 14.25 12Z\" fill=\"#1C274C\"></path> \r\n                    <path d=\"M8 13.75C8.9665 13.75 9.75 12.9665 9.75 12C9.75 11.0335 8.9665 10.25 8 10.25C7.0335 10.25 6.25 11.0335 6.25 12C6.25 12.9665 7.0335 13.75 8 13.75Z\" fill=\"#1C274C\"></path> \r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.2609 13.75C12.9375 13.2449 12.75 12.6443 12.75 12C12.75 10.2051 14.2051 8.75 16 8.75C17.7949 8.75 19.25 10.2051 19.25 12C19.25 13.7949 17.7949 15.25 16 15.25H8C6.20507 15.25 4.75 13.7949 4.75 12C4.75 10.2051 6.20507 8.75 8 8.75C9.79493 8.75 11.25 10.2051 11.25 12C11.25 12.6443 11.0625 13.2449 10.7391 13.75H13.2609Z\" fill=\"#1C274C\"></path> \r\n                </g>\r\n            </svg>\r\n        </ng-template>\r\n    </p-menubar>\r\n\r\n\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MenubarModule }, { kind: "component", type: i1$1.Menubar, selector: "p-menubar", inputs: ["model", "styleClass", "autoZIndex", "baseZIndex", "autoDisplay", "autoHide", "breakpoint", "autoHideDelay", "id", "ariaLabel", "ariaLabelledBy"], outputs: ["onFocus", "onBlur"] }, { kind: "ngmodule", type: CardModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: AppHeader, decorators: [{
            type: Component,
            args: [{ selector: 'lib-app-header', standalone: true, imports: [MenubarModule, CardModule], template: "\r\n    <p-menubar class=\"mb-2\">\r\n        <ng-template #start>\r\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n                <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n                <g id=\"SVGRepo_iconCarrier\"> \r\n                    <path d=\"M14.25 12C14.25 11.0335 15.0335 10.25 16 10.25C16.9665 10.25 17.75 11.0335 17.75 12C17.75 12.9665 16.9665 13.75 16 13.75C15.0335 13.75 14.25 12.9665 14.25 12Z\" fill=\"#1C274C\"></path> \r\n                    <path d=\"M8 13.75C8.9665 13.75 9.75 12.9665 9.75 12C9.75 11.0335 8.9665 10.25 8 10.25C7.0335 10.25 6.25 11.0335 6.25 12C6.25 12.9665 7.0335 13.75 8 13.75Z\" fill=\"#1C274C\"></path> \r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.2609 13.75C12.9375 13.2449 12.75 12.6443 12.75 12C12.75 10.2051 14.2051 8.75 16 8.75C17.7949 8.75 19.25 10.2051 19.25 12C19.25 13.7949 17.7949 15.25 16 15.25H8C6.20507 15.25 4.75 13.7949 4.75 12C4.75 10.2051 6.20507 8.75 8 8.75C9.79493 8.75 11.25 10.2051 11.25 12C11.25 12.6443 11.0625 13.2449 10.7391 13.75H13.2609Z\" fill=\"#1C274C\"></path> \r\n                </g>\r\n            </svg>\r\n        </ng-template>\r\n    </p-menubar>\r\n\r\n\r\n" }]
        }] });

class AirDensitySensorService {
    http;
    data = [];
    index = 0;
    constructor(http) {
        this.http = http;
    }
    async getAirDensityDetailData() {
        const response = await this.http.get('data/airDensityData.json');
        this.data = (await firstValueFrom(response)).Payload;
    }
    next() {
        const responseData = this.data[this.index];
        this.index = (this.index + 1) % this.data.length;
        return responseData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: AirDensitySensorService, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: AirDensitySensorService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: AirDensitySensorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1$2.HttpClient }] });

class ThrottlePositionServices {
    http;
    data = [];
    index = 0;
    constructor(http) {
        this.http = http;
    }
    async getThrottlePositionData() {
        const response = await this.http.get('data/throttlePositionData.json');
        this.data = (await firstValueFrom(response)).Payload;
    }
    next() {
        const responseData = this.data[this.index];
        this.index = (this.index + 1) % this.data.length;
        return responseData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: ThrottlePositionServices, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: ThrottlePositionServices, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: ThrottlePositionServices, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1$2.HttpClient }] });

class SpeedServices {
    http;
    data = [];
    index = 0;
    constructor(http) {
        this.http = http;
    }
    async getSpeedData() {
        const response = await this.http.get('data/speedData.json');
        this.data = (await firstValueFrom(response)).Payload;
    }
    next() {
        const responseData = this.data[this.index];
        this.index = (this.index + 1) % this.data.length;
        return responseData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: SpeedServices, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: SpeedServices, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: SpeedServices, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1$2.HttpClient }] });

class TirePressureServices {
    http;
    data = [];
    index = 0;
    constructor(http) {
        this.http = http;
    }
    async getTirePressureData() {
        const response = await this.http.get('data/tirePressureData.json');
        this.data = (await firstValueFrom(response)).Payload;
    }
    next() {
        const responseData = this.data[this.index];
        this.index = (this.index + 1) % this.data.length;
        return responseData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: TirePressureServices, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: TirePressureServices, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: TirePressureServices, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1$2.HttpClient }] });

// libs/shared/src/lib/services/sensor-stream.service.ts
class OrchestratorServices {
    airDensity;
    throttlePosition;
    speed;
    tirePressure;
    intervalId;
    index = 0;
    constructor(airDensity, throttlePosition, speed, tirePressure) {
        this.airDensity = airDensity;
        this.throttlePosition = throttlePosition;
        this.speed = speed;
        this.tirePressure = tirePressure;
    }
    async initialize() {
        await Promise.all([
            this.airDensity.getAirDensityDetailData(),
            this.throttlePosition.getThrottlePositionData(),
            this.speed.getSpeedData(),
            this.tirePressure.getTirePressureData()
        ]);
    }
    start(onSnapshot) {
        this.emit(onSnapshot);
        this.intervalId = setInterval(() => {
            this.emit(onSnapshot);
        }, 3000);
    }
    stop() {
        clearInterval(this.intervalId);
    }
    ngOnDestroy() {
        this.stop();
    }
    emit(onSnapshot) {
        const snapshot = {
            airDensityData: this.airDensity.next(),
            throttlePositionData: this.throttlePosition.next(),
            speedData: this.speed.next(),
            tirePressureData: this.tirePressure.next(),
            index: this.index++,
            recordedAt: new Date(),
        };
        onSnapshot(snapshot);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: OrchestratorServices, deps: [{ token: AirDensitySensorService }, { token: ThrottlePositionServices }, { token: SpeedServices }, { token: TirePressureServices }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: OrchestratorServices, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.12", ngImport: i0, type: OrchestratorServices, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: AirDensitySensorService }, { type: ThrottlePositionServices }, { type: SpeedServices }, { type: TirePressureServices }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AirDensitySensorService, AirDensityWidgetComponent, AppHeader, AvgThrottleWidgetComponent, FuelConsumptionWidgetComponent, OrchestratorServices, SharedService, SpeedServices, SpeedWidgetComponent, ThrottlePositionServices, TirePressureServices, TirePressureWidgetComponent, WeightWidgetComponent };
//# sourceMappingURL=shared.mjs.map
