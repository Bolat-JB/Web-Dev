import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Items } from './items';
import { ProductService} from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
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

  selectCategory(category: string) {
    this.filteredProducts = this.productsList.filter(product => product.category === category);
  }
  getProductsList(): Items[] {
    return this.productsList;
  }
}
