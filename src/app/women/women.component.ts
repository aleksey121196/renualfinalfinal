import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  constructor(private cartService:CartService){}
  Women = [
    { id: 1, price: 200, women: "dres.webp", size: ['XS', 'S', 'M', 'L'], inStock: true ,addedToCart: false,cetegory:'women'},
    { id: 2, price: 100, women: "jins.webp", size: ['XS', 'S', 'M', 'L', 'XL'], inStock: false,addedToCart: false ,cetegory:'women'},
    { id: 3, price: 70, women: "tshirt.webp", size: ['XS', 'S', 'M', 'L', 'XL'], inStock: true,addedToCart: false ,cetegory:'women'},
  ];
  cartItemsCount: number = 0;
  addToCart(item: any): void {
    if (!item.addedToCart&& item.inStock ) {
      this.cartService.addToCart(item);
      item.addedToCart = true;
    }
  }
}
