import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AirDensityModel } from '../../models/air-density.model';
import { MonitoringAlert } from '../../models/alert.model';
import { MonitoringRulesService } from '../../services/alert.services';
import { animate, stagger } from 'animejs';

@Component({
  selector: 'lib-air-density-widget',
  imports: [ CardModule ],
  templateUrl: './air-density-widget.component.html',
  styleUrl: './air-density-widget.component.css',
})
export class AirDensityWidgetComponent implements AfterViewInit, OnChanges {
  
  @Input() data: AirDensityModel | undefined;
  @Output() warningStatus = new EventEmitter<any>();

  @ViewChild('thermoIcon')
  thermoIcon!: ElementRef;
  
  private initialized = false;
  
  constructor(private monitoringRulesService: MonitoringRulesService) {}

  ngAfterViewInit(): void {
    this.initialized = true;
    this.addAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.initialized) {
      this.addAnimation();

      if (!this.data?.temperatureCelsius) return;
      const alertTemperature = this.monitoringRulesService.createTemperatureAlert(this.data?.temperatureCelsius);
      if(alertTemperature?.status == 'critical') this.warningStatus.emit(alertTemperature);      
    } 
  }

  private addAnimation() {
    animate('.metric-item', {
      delay: stagger(120),
      duration: 700,
      ease: 'outExpo'
    });

    animate(this.thermoIcon.nativeElement, {
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
