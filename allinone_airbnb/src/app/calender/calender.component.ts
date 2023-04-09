import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent {
  selected: Date | null;
  constructor() {
    this.selected = new Date('11/12/2023');
  }
}
