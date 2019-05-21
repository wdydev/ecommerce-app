import {ApiService} from '../../services/api.service';
import {Order} from '../../entity/order';
import {Injectable} from '@angular/core';

@Injectable()
export class CheckoutService {
  constructor(private api: ApiService) {
  }

  public async saveOrder(order: Order): Promise<Order> {
    const res = await this.api.post('/orders', order).toPromise();
    return res.order;
  }
}
