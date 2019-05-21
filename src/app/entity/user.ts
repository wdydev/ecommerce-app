import {Address} from './address';
import {Payment} from './payment';

export interface UserI {
  name: string;
  mobile: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
<<<<<<< HEAD
  addresses: Array<Address>;
=======
   addresses: Array<Address>;
>>>>>>> 3c1885f3c53853d234404cf37f57a10c7f2cd8fa
  addAddress: (address: Address) => void;
  payments: Array<Payment>;
  addPayment: (payment: Payment) => void;
  _id?: string;
}

export class User implements UserI {
  public name: string;
  public mobile: string;
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
