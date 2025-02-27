import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
  host: { fullScreen: 'fullScreen' },
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map') map?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.map) throw 'El elemento html no fue encontrado';
    const map = new Map({
      container: this.map.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
