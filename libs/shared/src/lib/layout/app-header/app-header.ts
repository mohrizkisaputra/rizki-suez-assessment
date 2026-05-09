import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'lib-app-header',
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  standalone: true,
  imports: [MenubarModule, CardModule]
})
export class AppHeader {
  headerItems: MenuItem[] | undefined;

  ngOnInit() {
    // this.headerItems = [

    // ]
  }
}
