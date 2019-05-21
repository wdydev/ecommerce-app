import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../entity/cart.item';
import {CartService} from '../../services/cart.service';
import {UserI} from '../../entity/user';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Order} from '../../entity/order';
import {CartCalc} from '../../pipes/cart.calc';
import {CheckoutService} from './checkout.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  public cart: Array<CartItem>;
  public user: UserI;
  public addACard: boolean;
  public checkoutForm: FormGroup;
  public order: Order;
  public couponDiscount: number;

  constructor(private service: CartService,
              private userService: UserService,
              private checkoutService: CheckoutService,
              private router: Router) {
    this.cart = this.service.getItems();
    this.service.subscribe(items => this.cart = items);

    this.user = userService.user;
    userService.user$.subscribe(user => this.user = user);

    this.addACard = false;

    this.checkoutForm = new FormGroup({
      address: new FormControl(),
      card: new FormControl()
    });
  }

  public checkCoupon(coupon) {

    (coupon === 'AssadSaad') ? this.couponDiscount === 10 : this.couponDiscount === 0;
  }

  public addCard() {
    this.addACard = true;
  }

  public cardAdded() {
    this.addACard = false;
  }

  public async checkout() {
    this.order = {
      address: this.checkoutForm.value.address,
      payment: this.checkoutForm.value.card,
      user: {
        _id: this.user._id,
        name: this.user.name,
        email: this.user.email,
        mobile: this.user.mobile,
      },
      orderDate: new Date(),
      status: 1,
      products: this.cart,
      paymentType: 'stripe',
      shippingCost: new CartCalc().transform(this.cart, 'shipping'),
      total: new CartCalc().transform(this.cart, 'total')
    };

    const order = await this.checkoutService.saveOrder(this.order);
    if (!order || !order._id) {
      // order was not saved.
      return false;
    }

    this.service.removeAll();
    this.router.navigate(['confirmation', order._id]);
  }

  public ngOnInit(): void {
  }
}
