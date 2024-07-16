import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStylesService {

  constructor() { }

  applyGlobalStyles(): void {
    // Logic to apply global styles
    // In Angular, global styles are typically applied via the global.css file
    // which is already included in the angular.json configuration.
    console.log('Global styles applied');
  }
}
