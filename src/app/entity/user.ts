import {Address} from './address';

export interface UserI {
  name: string;
  mobile: string;
  addresses: Array<Address>;
  addAddress: (address: Address) => void;
}

export class User implements UserI {
  public name: string;
  public mobile: string;
  public addresses: Array<Address>;

  constructor() {
    this.addresses = [];
  }

  public addAddress(address: Address) {
    this.addresses.push(address);
  }
}
