import { Component, OnInit, inject} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Items} from '../items';
import {AppComponent} from '../app.component';
import { ProductService} from '../product.service';
import {ProductItemComponent} from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [
    NgForOf,
    ProductItemComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  AppComponent = AppComponent;

  products: Items[] = [];
  private productService = inject(ProductService);
  constructor(public appComponent: AppComponent) {
    this.products = this.appComponent.getProductsList();
  }
  ngOnInit() {
    this.products = this.productService.getproducts();
  }


}
