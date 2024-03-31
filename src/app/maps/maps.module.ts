import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import mapboxgl from 'mapbox-gl';
import { CounterComponent } from '../alone/components/counter/counter.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
mapboxgl.accessToken =
  'pk.eyJ1IjoibmVjcm9iYWhhbXV0IiwiYSI6ImNsOXc5OGswbDBnZ3MzdmxzeG9ubzN2d3gifQ.hiV7qArCUVUeafA1QkJJJw';

@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterComponent,
    SideMenuComponent,
  ],
})
export class MapsModule {}
