import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../area.service';
import { Area } from 'area';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  area: Area | undefined;
  constructor(
    private route: ActivatedRoute,
    private areaService: AreaService
  ) // private location: Location
  {}
  ngOnInit(): void {
    this.getArea();
  }

  getArea(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.areaService.getArea(id).subscribe((area) => (this.area = area));
    console.log(this.area);
  }
}
