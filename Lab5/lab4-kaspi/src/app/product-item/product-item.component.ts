import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {ProductListComponent} from '../product-list/product-list.component';
import { AppComponent } from '../app.component';
import {Input} from '@angular/core';
import {Items} from '../items';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-item',
  imports: [
    NgForOf
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() item: any;

  products: Items[] =[];

  constructor(public appComponent: AppComponent) {
    this.products = this.appComponent.getProductsList();
  }

  sharing(id: number): void {
    const product = this.products.find(p => p.id === id);
    if (product) {
      const encodedLink = encodeURIComponent(product.productLink);
      const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
      window.open(telegramShareUrl, '_blank');
    }
  }
  like():void {
    if(this.item.likes <= 0){
      this.item.likes++;
    }
  }

  remove(id: number):void {
    this.appComponent.filteredProducts = this.appComponent.filteredProducts.filter(product => product.id !== id);
  }
}
