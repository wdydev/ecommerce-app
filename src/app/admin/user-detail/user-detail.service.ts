import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {UserI} from '../../entity/user';
import {Order} from '../../entity/order';

@Injectable()
export class UserDeatilService {
  constructor(private api: ApiService) {
  }

  public async getUser(id: string): Promise<UserI> {
    const res = await this.api.get(`/users/${id}`).toPromise();
    return res.user;
  }

  public async getOrders(id): Promise<Array<Order>> {
    const res = await this.api.get(`orders/user/${id}`).toPromise();
    return res.orders || [];
  }


}
