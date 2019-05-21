import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {UserI} from '../../entity/user';
import {Order} from '../../entity/order';

@Injectable()
export class OrderDetailService {


  constructor(private api: ApiService) {
  }



  public async getOrder(id: string):Promise<Order> {
    const res = await this.api.get(`/orders/${id}`).toPromise();
     return res.order;
  }


}
