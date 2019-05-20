/* tslint:disable:variable-name */
import {Address} from './address';

export interface UserI {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  paymentMethod: string;
  addresses: Array<Address>;
  addAddress: (address: Address) => void;
  _id?: string;
}

export class User implements UserI {
  public fullName: string;
  public email: string;
  public password: string;
  public phoneNumber: string;
  public paymentMethod: string;
  public addresses: Array<Address>;
  public _id?: string;

  constructor(user: User) {
    this.fullName = user.fullName;
    this.email = user.email;
    this.password = user.password;
    this.phoneNumber = user.phoneNumber;
    this.paymentMethod = user.paymentMethod;
    this.addresses = [];
    this._id = user._id;
  }


  public addAddress(address: Address) {
    this.addresses.push(address);
  }
}
