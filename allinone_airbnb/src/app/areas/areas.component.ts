import { Component } from '@angular/core';
import { AreaService } from '../area.service';
import { Area } from 'area';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css'],
})
export class AreasComponent {
  areas: Area[] = [];
  constructor(private areaService: AreaService) {}

  ngOnInit(): void {
    this.getAreas();
  }

  getAreas(): void {
    this.areaService.getAreas().subscribe((areas) => (this.areas = areas));
  }
}
