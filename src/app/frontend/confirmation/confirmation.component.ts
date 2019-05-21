import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../entity/cart.item';
import {CartService} from '../../services/cart.service';
import {UserI} from '../../entity/user';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Order} from '../../entity/order';
import {CartCalc} from '../../pipes/cart.calc';
//
import {Router} from '@angular/router';
import {CheckoutService} from '../checkout/checkout.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {

  private user: UserI;
  private order: Order;
  constructor(
              private userService: UserService,
              ) {
    
    

    this.user = userService.user;
    userService.user$.subscribe(user => this.user = user);


  }

  ngOnInit(): void {
  }
}
