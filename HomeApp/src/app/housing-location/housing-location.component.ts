import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from './HousingLocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  // ! --> expecting value to be passed
  @Input() housingLocation!: HousingLocation;
}
