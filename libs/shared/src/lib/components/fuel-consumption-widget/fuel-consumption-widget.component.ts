import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card'
import { FuelEconomyResult } from '../../models/fuel-economy.model';
import { animate } from 'animejs';

@Component({
  selector: 'lib-fuel-consumption-widget',
  imports: [ CardModule ],
  templateUrl: './fuel-consumption-widget.component.html',
  styleUrl: './fuel-consumption-widget.component.css',
})
export class FuelConsumptionWidgetComponent {

  @Input() data: FuelEconomyResult| undefined;
  @Input() distance = 0; 

  @ViewChild('rangeBar') rangeBar!: ElementRef;
  @ViewChild('economyVal') economyVal!: ElementRef;
  @ViewChild('rangeVal') rangeVal!: ElementRef;

  private viewReady = false;

  get rangeBarPct(): number {
    if (!this.data) return 0;
    return Math.min(100, (this.data.maxRangeKm / this.distance) * 100);
  }

  get canComplete(): boolean {
    return this.data?.canCompleteTrip ?? false;
  }

  get badgeClass(): string {
    return this.canComplete
      ? 'badge-success'
      : 'badge-danger';
  }

  get badgeLabel(): string {
    return this.canComplete ? 'Trip achievable' : 'Refuel needed';
  }

  get estTimeLabel(): string {
    if (!this.data) return '—';
    const h = Math.floor(this.data.estTravelTimeHours);
    const m = Math.round((this.data.estTravelTimeHours - h) * 60);
    return `${h}h ${m}m`;
  }

  get factors() {
    if (!this.data) return [];
    const f = this.data.factors;
    return [
      { label: 'Air density',   val: f.airDensityFactor, raw: `${f.airDensityKgm3} kg/m³` },
      { label: 'Speed / drag',  val: f.speedFactor,      raw: `${this.data ? '' : ''}` },
      { label: 'RPM zone',      val: f.rpmFactor,        raw: '' },
      { label: 'Tire pressure', val: f.tireFactor,       raw: '' },
      { label: 'Total load',    val: f.loadFactor,       raw: '' },
      { label: 'Throttle',      val: f.throttleFactor,   raw: '' },
      { label: 'Combined',      val: f.totalFactor,      raw: `÷ base 42 km/L` },
    ];
  }

  factorColor(val: number): string {
    if (val <= 1.0)  return '#1D9E75';
    if (val <= 1.1)  return '#1D9E75';
    if (val <= 1.2)  return '#BA7517';
    return '#A32D2D';
  }

  factorBarWidth(val: number): number {
    return Math.min(100, Math.round((val - 1) * 200));
  }

  ngAfterViewInit() {
    this.viewReady = true;
    if (this.data) this.animateIn();
  }

  ngOnChanges() {
    if (this.viewReady && this.data) this.animateIn();
  }

  private animateIn() {
    if (this.rangeBar?.nativeElement) {
      animate(this.rangeBar.nativeElement, {
        width: [`0%`, `${this.rangeBarPct}%`],
        duration: 800,
        ease: 'outCubic',
      });
    }

    if (this.economyVal?.nativeElement && this.data) {
      animate(this.economyVal.nativeElement, {
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 500,
        ease: 'outBack',
      });
    }
  }

}
