import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';

import { darkStyle } from './map-dark-style';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public platform: Platform) { }

  async ngAfterViewInit() {
    const appEl = this.doc.querySelector('ion-app');
    let isDark = false;
    let style = [];
    if (appEl.classList.contains('dark-theme')) {
      style = darkStyle;
    }



 

  

    

   

  //   const observer = new MutationObserver((mutations) => {
  //     mutations.forEach((mutation) => {
  //       if (mutation.attributeName === 'class') {
  //         const el = mutation.target as HTMLElement;
  //         isDark = el.classList.contains('dark-theme');
  //         if (map && isDark) {
  //           map.setOptions({ styles: darkStyle });
  //         } else if (map) {
  //           map.setOptions({ styles: [] });
  //         }
  //       }
  //     });
  //   });
  //   observer.observe(appEl, {
  //     attributes: true
  //   });
  // }

 

}
}