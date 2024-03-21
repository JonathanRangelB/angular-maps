import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css',
  host: { zoom: 'zoom' },
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;
  zoom = 10;
  map?: Map;
  currentLngLat: LngLat = new LngLat(-103.34455069328878, 20.6816898829871);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento html no fue encontrado';
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map!.remove();
  }

  mapListeners() {
    if (!this.map) throw 'Map no ha sido inicializado';
    this.map.on('zoom', (event) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (event) => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('moveend', () => {
      this.currentLngLat = this.map!.getCenter();
      const { lat, lng } = this.currentLngLat;
    });
  }

  zoomChanged(inputZoom: HTMLInputElement) {
    console.log({ zoomValue: inputZoom.value });
    this.zoom = +inputZoom.value;
    this.map!.zoomTo(this.zoom);
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }
}
