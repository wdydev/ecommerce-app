import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {UserI} from '../../entity/user';
import {Order} from '../../entity/order';

@Injectable()
export class OrdersService {
  constructor(private api: ApiService) {
  }

  public async getOrders(): Promise<Array<Order>> {
    const res = await this.api.get('/orders').toPromise();
    return res.orders || [];
  }


  public async deleteOrder(id: string) {
    const res = await this.api.delete(`/orders/${id}`).toPromise();
    return res.status === 200;
  }

  public async updateOrder(order: any) {
    const res = await this.api.patch(`/orders/${order._id}`, {status: order.status}).toPromise();
    return res.status === 200;
  }

  public async getOrder(id: string) {
    const res = await this.api.get(`/orders/${id}`).toPromise();
    return res.status === 200;
  }
}
