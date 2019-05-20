import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../entity/cart.item';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  private cart: Array<CartItem>;

  constructor(private service: CartService) {
    this.cart = this.service.getItems();
    this.service.subscribe(items => this.cart = items);
  }

  public ngOnInit(): void {

  }
}
