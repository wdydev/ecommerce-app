import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Order} from '../../entity/order';
import {UserI} from '../../entity/user';

@Injectable()
export class OrderHistoryService {

  private order: Order;
  private user: UserI;

  constructor(private api: ApiService) {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
  }

  public async getOrders(): Promise<Array<Order>> {
    const res = await this.api.get(`orders/user/${this.user._id}`).toPromise();
    return res.orders || [];
  }



}
