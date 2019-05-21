import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../entity/cart.item';
import {CartService} from '../../services/cart.service';
import {UserI} from '../../entity/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  private cart: Array<CartItem>;
  private user: UserI;

  constructor(private service: CartService, private userService: UserService) {
    this.cart = this.service.getItems();
    this.service.subscribe(items => this.cart = items);
    this.user = userService.user;
  }

  public ngOnInit(): void {
    console.log(this.user);
  }
}
