import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AirDensityModel } from '../../models/air-density.model';
import { animate, stagger } from 'animejs';

@Component({
  selector: 'lib-air-density-widget',
  imports: [ CardModule ],
  templateUrl: './air-density-widget.component.html',
  styleUrl: './air-density-widget.component.css',
})
export class AirDensityWidgetComponent {
  @Input() data: AirDensityModel | undefined;

  @ViewChild('thermoIcon')
  thermoIcon!: ElementRef;


  ngAfterViewInit(): void {
      animate('.metric-item', {
        translateY: [20, 0],
        opacity: [0, 1],
        delay: stagger(120),
        duration: 700,
        ease: 'outExpo'
      });
  
      animate(this.thermoIcon.nativeElement, {
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1200,
        ease: 'outElastic(1, .6)'
      });
  
      animate(this.thermoIcon.nativeElement, {
        translateY: [-4, 4],
        alternate: true,
        loop: true,
        ease: 'inOutSine',
        duration: 2000
      });
    }
}
