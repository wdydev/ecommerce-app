import {Address} from './address';
import {Payment} from './payment';

export interface UserI {
  name: string;
  mobile: string;
  email: string;
  password?: string;
  addresses?: Array<Address>;
  addAddress?: (address: Address) => void;
  payments?: Array<Payment>;
  addPayment?: (payment: Payment) => void;
  _id?: string;
}

export class User implements UserI {
  public name: string;
  public mobile: string;
  public email: string;
  public password: string;
  public payments: Array<Payment>;
  public addresses: Array<Address>;
  // tslint:disable-next-line:variable-name
  public _id?: string;

  constructor(user: User) {
    this.email = user.email;
    this.password = user.password;
    this.payments = [];
    this.addresses = [];
    this._id = user._id;
  }

  public addAddress(address: Address) {
    this.addresses.push(address);
  }

  public addPayment(payment: Payment) {
    this.payments.push(payment);
  }
}
