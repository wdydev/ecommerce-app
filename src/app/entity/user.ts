export interface UserI {
  fullName: string;
  addresses: Array<Address>;
  addAddress: (address: Address) => void;
}

export class User implements UserI {
  public fullName: string;
  public addresses: Array<Address>;

  constructor() {
    this.addresses = [];
  }


  public addAddress(address: Address) {
    this.addresses.push(address);
  }
}
