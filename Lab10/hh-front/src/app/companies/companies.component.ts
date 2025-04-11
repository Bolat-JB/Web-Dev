import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {CommonModule, NgForOf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, NgForOf, ReactiveFormsModule, RouterModule],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: any[] = [];
  constructor(private companiesService: ServicesService) { }
  ngOnInit() {
    this.companiesService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      console.log(companies);
    });
  }


  // createAlbum() {
  //   if (this.newAlbumTitle.trim()) {
  //     const newAlbum = {
  //       userId: 1,
  //       title: this.newAlbumTitle,
  //     };
  //     this.albumService.createAlbum(newAlbum).subscribe((album) => {
  //       this.albums.unshift({ ...album, id: this.albums.length + 1 });
  //       this.newAlbumTitle = '';
  //     });
  //   }
  // }
}
