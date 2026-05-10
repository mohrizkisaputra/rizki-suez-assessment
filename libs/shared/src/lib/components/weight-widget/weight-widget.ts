import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

export interface WeightDetailModel {
    person: number,
    totalPersonKg: number,
    cargoKg: number
}

@Component({
  selector: 'lib-weight-widget',
  imports: [ CardModule ],
  standalone: true,
  templateUrl: './weight-widget.html',
  styleUrl: './weight-widget.css',
})
export class WeightWidget {
  @Input() data: WeightDetailModel | undefined;

}
