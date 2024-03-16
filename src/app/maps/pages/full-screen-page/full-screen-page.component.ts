import { Component } from '@angular/core';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
  host: { fullScreen: 'fullScreen' },
})
export class FullScreenPageComponent {}
