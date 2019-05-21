import {Address} from './address';
import {Payment} from './payment';
import {CartItem} from './cart.item';
import {UserI} from './user';
import {CouponI} from './coupon';

export interface Order {
  _id?: string;
  address: Address;
  payment: Payment;
  products: Array<CartItem>;
  total: number;
  shippingCost: number;
  user: UserI;
  coupon?: CouponI;
  paymentType: 'paypal' | 'stripe';
  status?: 1 | 2 | 3 | 4 | 5 | 6;
}
