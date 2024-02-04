import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private cartItemsCountSubject = new BehaviorSubject<number>(0);
  cartItemsCount$ = this.cartItemsCountSubject.asObservable();

  addToCart(item: any): void {
    const currentCart: any[] = this.cartItemsSubject.value || [];
    const updatedCart: any[] = [...currentCart, item];
    this.cartItemsSubject.next(updatedCart);

    const updatedCount = updatedCart.length;
    this.cartItemsCountSubject.next(updatedCount);
  }

  constructor() { }
}
