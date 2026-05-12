import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SpeedModel } from '../../models/speed.model';
import { animate } from 'animejs';

@Component({
  selector: 'lib-speed-widget',
  standalone: true,
  imports: [ CardModule ],
  templateUrl: './speed-widget.component.html',
  styleUrl: './speed-widget.component.css'
})
export class SpeedWidgetComponent implements AfterViewInit, OnChanges {
  
  @Input() data: SpeedModel| undefined;

  @ViewChild('kmhValue') 
  kmhValue!: ElementRef;

  public speedColor = '#22c55e';
  private initialized = false;

  ngAfterViewInit(): void {
    this.initialized = true;
    this.addAnimationToWidget();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.initialized) this.addAnimationToWidget();
  }

  addAnimationToWidget(): void {
    this.updateSpeedState();
    
    if (!this.data) return;

    animate(this.kmhValue.nativeElement, {
      scale: [1, 1.03],
      alternate: true,
      loop: true,
      duration: 1400,
      ease: 'inOutSine'
    });
  }

  private updateSpeedState(): void {
    const kmh = this.data?.speedKmh ?? 0;

    if (kmh < 40) this.speedColor = '#22c55e';
    else if (kmh >= 40 && kmh < 80) this.speedColor = '#f59e0b';
    else this.speedColor = '#ef4444';
  }
}
