import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  Men = [
    { id: 1, price: 80, men: "jins.webp", size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: false, addedToCart: false,category:'men' },
    { id: 2, price: 250, men: "swetsheret.webp", size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true, addedToCart: false,category:'men'  },
    { id: 3, price: 40, men: "tshirt.webp", size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true, addedToCart: false,category:'men'  },
  ];

  cartItemsCount: number = 0;

  constructor(private cartService: CartService) {}

  addToCart(item: any): void {
    if (!item.addedToCart&& item.inStock ) {
      this.cartService.addToCart(item);
      item.addedToCart = true;
    }
  }
}
