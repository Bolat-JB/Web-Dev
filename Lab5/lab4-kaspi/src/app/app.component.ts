import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NgClass} from '@angular/common';
import { Items } from './items';
import { ProductService} from './product.service';
import {NONE_TYPE} from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4-kaspi';
  productsList: Items[] = [];
  filteredProducts: Items[] = [];
  constructor(private ProductService: ProductService) {
    this.productsList = this.ProductService.getproducts();
    this.filteredProducts = this.productsList;
  }
  selectedCategory: string | null = null;

  selectCategory(category: string) {
    if (this.selectedCategory === category) {
      this.selectedCategory = null;
      this.filteredProducts = this.productsList;
    } else {
      this.selectedCategory = category;
      this.filteredProducts = this.productsList.filter(product => product.category === category);
    }
  }
  getProductsList(): Items[] {
    return this.productsList;
  }
}
