import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
  host: { markers: 'markers' },
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;
  markers: MarkerAndColor[] = [];
  zoom = 13;
  map?: Map;
  currentLngLat: LngLat = new LngLat(-103.33854757930771, 20.671975706248958);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento html no fue encontrado';
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListeners();
    this.loadFromLocalStorage();

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Jonathan Rangel';

    // const marker = new Marker({ element: markerHtml })
    //   // { color: 'red' }
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map!.remove();
  }

  mapListeners() {
    this.map?.on('contextmenu', (event) => {
      this.createMarker(event.lngLat);
    });
  }

  createMarker(lngLat?: LngLat) {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    lngLat = lngLat ? lngLat : this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers?.push({
      color,
      marker,
    });
    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
    this.saveToLocalStorage();
  }

  ondragend() {
    console.log('arrastrado');
  }

  flyTo(marker: MarkerAndColor) {
    this.map?.flyTo({
      zoom: 16,
      center: marker.marker.getLngLat(),
    });
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map(
      ({ color, marker }) => {
        return { color, lngLat: marker.getLngLat().toArray() };
      }
    );
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  loadFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);
    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const coordenadas = new LngLat(lng, lat);
      this.addMarker(coordenadas, color);
    });
  }
}
