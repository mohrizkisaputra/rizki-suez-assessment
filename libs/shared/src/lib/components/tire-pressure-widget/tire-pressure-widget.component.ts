import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TirePressureModel } from '../../models/tire-pressure.model';
import { animate } from 'animejs';

@Component({
  selector: 'lib-tire-pressure-widget',
  standalone: true,
  imports: [ CardModule ],
  templateUrl: './tire-pressure-widget.component.html',
  styleUrl: './tire-pressure-widget.component.css'
})
export class TirePressureWidgetComponent implements AfterViewInit, OnChanges{
  
  @Input() data: TirePressureModel | undefined;
  @ViewChild('tireIcon')
  tireIcon!: ElementRef;

  public frontColor = '#22c55e';
  public rearColor = '#22c55e';
  public pressureColor = '#22c55e';
  private initialized = false;
  
  ngAfterViewInit(): void {
    this.initialized = true;
    this.addAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.initialized) {
      this.updatePressureState();
      this.animateWarning();
    }
  }

  private addAnimation() {
    animate(this.tireIcon.nativeElement, {
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1200,
      ease: 'outElastic(1, .6)'
    });
  }

  private updatePressureState(): void {

    const front = this.data?.frontPsi ?? 0;
    const rear = this.data?.rearPsi ?? 0;

    this.frontColor =
      this.getPressureColor(front);

    this.rearColor =
      this.getPressureColor(rear);

    const lowest =
      Math.min(front, rear);

    this.pressureColor =
      this.getPressureColor(lowest);
  }

  private getPressureColor(
    psi: number
  ): string {

    // Normal
    if (psi >= 30) {
      return '#22c55e';
    }

    // Warning
    if (psi >= 26) {
      return '#f59e0b';
    }

    // Critical
    return '#ef4444';
  }

  private animateWarning(): void {

    const front = this.data?.frontPsi ?? 0;
    const rear = this.data?.rearPsi ?? 0;

    const critical =
      front < 26 || rear < 26;

    if (!critical) return;

    animate(this.tireIcon.nativeElement, {

      translateX: [-3, 3],

      alternate: true,

      loop: 2,

      duration: 120,

      ease: 'inOutSine'
    });
  }
}
