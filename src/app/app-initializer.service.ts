import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  initializeApp(): Promise<any> {
    localStorage.setItem('bricks-theme', 'pacasmayo');
    return Promise.resolve();
  }
}