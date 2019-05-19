import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Address} from '../../entity/address';

@Injectable()
export class AddressService {
  constructor(private api: ApiService) {
  }

  public async getAddresses(): Promise<Array<Address>> {
    const res = await this.api.get('/addresses').toPromise();
    return res.addresses || [];
  }

  public async saveAddress(data) {
    const res = await this.api.post('/address', data).toPromise();
    return res.address;
  }

  public async deleteAddress(id: string) {
    const res = await this.api.delete(`/address/${id}`).toPromise();
    return res.status === 200;
  }

}
