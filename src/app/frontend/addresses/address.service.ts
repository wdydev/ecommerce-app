import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Address} from '../../entity/address';

@Injectable()
export class AddressService {
  constructor(private api: ApiService) {
  }

  public async getAddresses(): Promise<Array<Address>> {
    const res = await this.api.get('/addresses/1').toPromise();
    console.log(res);
    return null;
  }

  public async saveCategory() {

  }
}
