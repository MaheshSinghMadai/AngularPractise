import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location/HousingLocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  //initialize empty
  housingLocationList: HousingLocation[] = [];

  constructor(public housingService  : HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}

