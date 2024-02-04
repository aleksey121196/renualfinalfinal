import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.css'
})
export class BagComponent {
  cartItems: any[]=[];
  totalPayment:number=0;

  constructor(private cartservice:CartService){}

  ngOnInit():void{
    this.cartservice.cartItems$.subscribe(items =>{
      console.log('Cart Items:', items);
      this.cartItems=items
      this.calculateTotalPayment();
    })
  }

  private calculateTotalPayment():void{
    this.totalPayment=this.cartItems.reduce((total,item)=>total+item.price,0);
  }

}
