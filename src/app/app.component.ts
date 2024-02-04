import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'renual';
  cartItemsCount: number = 0;

  constructor(private route: ActivatedRoute,private cartService:CartService) {}

  ngOnInit(): void {
    this.cartService.cartItemsCount$.subscribe(count => {
      this.cartItemsCount = count;
    });
  }
  
  isActive(route: string): boolean {
    return this.route.snapshot.routeConfig?.path === route;
  }
}
