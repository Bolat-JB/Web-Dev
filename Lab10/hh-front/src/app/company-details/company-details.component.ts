import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServicesService} from '../services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-details',
  imports: [CommonModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent implements OnInit {
  company: any;
  vacancies: any = [];
  constructor(private route: ActivatedRoute, private router: Router, private companyService: ServicesService) {
  }
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.companyService.getCompaniesByID(id).subscribe((company) => {
      this.company = company;
    })
    this.companyService.getCompanyVacancies(id).subscribe((company) => {
      this.vacancies = company;
      console.log(this.vacancies);
    })
  }

}
