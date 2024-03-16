import { Component } from '@angular/core';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
  host: { properties: 'properties' },
})
export class PropertiesPageComponent {}
