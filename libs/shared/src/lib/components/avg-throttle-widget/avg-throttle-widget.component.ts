import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ThrottlePositionModel } from '../../models/throttle-position.model';
import { animate, stagger } from 'animejs';

@Component({
  selector: 'lib-avg-throttle-widget',
  imports: [ CardModule ],
  templateUrl: './avg-throttle-widget.component.html',
  styleUrl: './avg-throttle-widget.component.css',
})
export class AvgThrottleWidgetComponent implements AfterViewInit, OnChanges {
  
  @ViewChild('gaugeIcon')
  gaugeIcon!: ElementRef;

  public throttleColor = '#18c418';
  private initialized = false;

  @Input() data: ThrottlePositionModel | undefined;
  
  ngAfterViewInit(): void {
    this.initialized = true;
    this.addAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.initialized) this.addAnimation();
  }

  addAnimation(): void {
    this.updateThrottleColor();

    animate(this.gaugeIcon.nativeElement, {
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 10,
      ease: 'outElastic(1, .6)'
    });
  }

  private updateThrottleColor(): void {
    const throttle = this.data?.throttlePct ?? 0;
    let color = '#22c55e';

    if (throttle < 30) color = '#22c55e';
    else if (throttle >= 30 && throttle <= 70) {
      const progress = (throttle - 30) / 40;
      color = this.interpolateColor( '#f59e0b', '#fb923c', progress );
    } else {
      const progress = Math.min((throttle - 70) / 30, 1);
      color = this.interpolateColor( '#fb923c', '#ef4444', progress);
    }

    this.throttleColor = color;
  }

  private interpolateColor( color1: string, color2: string, factor: number ): string {
    const c1 = this.hexToRgb(color1);
    const c2 = this.hexToRgb(color2);
    const r = Math.round( c1.r + factor * (c2.r - c1.r) );
    const g = Math.round( c1.g + factor * (c2.g - c1.g) );
    const b = Math.round( c1.b + factor * (c2.b - c1.b) );
    return `rgb(${r}, ${g}, ${b})`;
  }

  private hexToRgb(hex: string) {
    const parsed = hex.replace('#', '');
    return {
      r: parseInt(parsed.substring(0, 2), 16),
      g: parseInt(parsed.substring(2, 4), 16),
      b: parseInt(parsed.substring(4, 6), 16)
    };
  }
}
