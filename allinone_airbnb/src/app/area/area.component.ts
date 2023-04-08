import { Component, Input } from '@angular/core';
import { Area } from 'area';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent {
  @Input() area: Area;
  toggleLike(): void {
    this.area.liked = true;
    console.log(!this.area?.liked);
  }
  constructor(private areaService: AreaService) {}

  ngOnInit() {
    // console.log('HER', this.area?.name);
  }
}
