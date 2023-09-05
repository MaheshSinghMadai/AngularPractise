import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location/HousingLocation';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
    ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  housingLocation: HousingLocation | undefined;

  //adding form data
  appplyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

    constructor(public housingService: HousingService, public route: ActivatedRoute) {
        const housingLocationId = Number(route.snapshot.params['id']);
        this.housingLocation = housingService.getHousingLocationById(housingLocationId);
    }

    submitApplication(){
    this.housingService.submitApplication(

      // nullish coalescing operator to default to empty string if the value is null.
      this.appplyForm.value.firstName ?? '',
      this.appplyForm.value.lastName ?? '',
      this.appplyForm.value.email ?? '' ,
    )
    }
}
