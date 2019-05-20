/* tslint:disable:variable-name */
import {Address} from './address';
import {Payment} from './payment';

export interface UserI {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  addresses: Array<Address>;
  addAddress: (address: Address) => void;
  payments: Array<Payment>;
  addPayment: (payment: Payment) => void;
  _id?: string;
}

export class User implements UserI {
  public fullName: string;
  public email: string;
  public password: string;
  public phoneNumber: string;
  public payments: Array<Payment>;
  public addresses: Array<Address>;
  public _id?: string;

  constructor(user: User) {
    this.fullName = user.fullName;
    this.email = user.email;
    this.password = user.password;
    this.phoneNumber = user.phoneNumber;
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
