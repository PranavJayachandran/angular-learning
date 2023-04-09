import { Component, Input } from '@angular/core';
import { offering } from 'area';

@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.css'],
})
export class OfferingComponent {
  @Input() offering: offering | undefined;

  ngOnInit() {
    console.log(this.offering);
  }
}
