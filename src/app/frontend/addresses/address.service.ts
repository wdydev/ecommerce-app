import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Address} from '../../entity/address';
import {UserI} from '../../entity/user';

@Injectable()
export class AddressService {

  private user: UserI;

  constructor(private api: ApiService) {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
  }

  public async getAddresses(): Promise<Array<Address>> {
    const res = await this.api.get(`/users/${this.user._id}/addresses`).toPromise();
    return res.addresses || [];
  }

  public async saveAddress(data) {
    const res = await this.api.post(`/users/${this.user._id}/addresses`, data).toPromise();
    return res.address;
  }

  public async deleteAddress(id: string) {
    const res = await this.api.delete(`/users/${this.user._id}/addresses/${id}`).toPromise();
    return res.status === 200;
  }

}
