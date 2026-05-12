import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { WeightDetailModel } from '../../models/weight-detail.model';
import { animate } from 'animejs';

@Component({
  selector: 'lib-weight-widget',
  imports: [ CardModule ],
  standalone: true,
  templateUrl: './weight-widget.component.html',
  styleUrl: './weight-widget.component.css',
})
export class WeightWidgetComponent implements AfterViewInit, OnChanges {
  
  @Input() data: WeightDetailModel | undefined;

  @ViewChild('personIcon') personIcon!: ElementRef;
  @ViewChild('payloadValue') payloadValue!: ElementRef;
  payloadColor = '#38bdf8';

  get totalWeight(): number {
    return ( (this.data?.totalPersonKg ?? 0) + (this.data?.cargoKg ?? 0) );
  }

  ngAfterViewInit(): void {
    this.implementAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.updatePayloadColor();
      this.updateAnimation();
    }
  }

  private implementAnimation() {
     animate('.payload-container', {
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
      ease: 'outExpo'
    });

    animate(this.personIcon.nativeElement, {
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1200,
      ease: 'outElastic(1, .6)'
    });

    animate(this.personIcon.nativeElement, {
      translateY: [-3, 3],
      alternate: true,
      loop: true,
      duration: 2200,
      ease: 'inOutSine'
    });
  }

  private updateAnimation() {
    animate(this.payloadValue.nativeElement, {
      scale: [1.05, 1],
      duration: 300,
      ease: 'outQuad'
    });
  }

  private updatePayloadColor(): void {
    const total = this.totalWeight;
    if (total < 120) this.payloadColor = '#22c55e';
    else if (total < 180) this.payloadColor = '#f59e0b';
    else this.payloadColor = '#ef4444';
  }

}
