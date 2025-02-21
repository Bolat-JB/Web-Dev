import { Component, Input } from '@angular/core';
import { HousingLocation } from "../housinglocation";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule],
  standalone: true,
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn more</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
