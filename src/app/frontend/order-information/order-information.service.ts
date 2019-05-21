import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Order} from '../../entity/order';

@Injectable()
export class OrderInformationService {


  constructor(private api: ApiService) {
  }


  public async getOrder(id: string): Promise<Order> {
    const res = await this.api.get(`/orders/${id}`).toPromise();
    return res.order;
  }


}
