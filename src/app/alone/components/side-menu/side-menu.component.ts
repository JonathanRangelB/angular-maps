import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}
@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  menuItems: MenuItem[] = [
    { name: 'Full Screen', route: '/maps/fullscreen' },
    { name: 'Zoom range', route: '/maps/zoom' },
    { name: 'Markers', route: '/maps/markers' },
    { name: 'Properties', route: '/maps/properties' },
    { name: 'Alone Page', route: '/maps/alone' },
  ];
}
