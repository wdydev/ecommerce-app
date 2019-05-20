import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../entity/cart.item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  private cart: Array<CartItem>;

  constructor(private service: CartService) {
    this.cart = this.service.getItems();
    this.service.subscribe(items => this.cart = items);
  }

  public ngOnInit(): void {
  }
}
