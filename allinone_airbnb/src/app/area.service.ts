import { Injectable } from '@angular/core';
import { Area } from 'area';
import { Areas } from 'mock_areas';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  constructor() {}

  getAreas(): Observable<Area[]> {
    const areas = of(Areas);
    return areas;
  }

  toggleLike(id: number): void {
    for (let i = 0; i < Areas.length; i++) {
      if (Areas[i].id === id) Areas[i].liked = !Areas[i].liked;
    }
  }
}
