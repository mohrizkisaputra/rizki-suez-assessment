import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from '@shared'
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ 
    RouterOutlet, 
    AppHeader,
    DividerModule,
    SplitterModule,
    CardModule,
  ],
})
export class AppComponent {
  title = 'suez-assessment';
}
