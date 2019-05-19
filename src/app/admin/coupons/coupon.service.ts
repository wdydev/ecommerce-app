import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CategoryI} from '../../entity/category';

@Injectable()
export class CouponService {
  constructor(private api: ApiService) {
  }

  public async getCoupons(): Promise<Array<CategoryI>> {
    const res = await this.api.get('/coupons').toPromise();
    return res;
  }

  public async saveCoupon(data) {
    const res = await this.api.post('/coupons', data).toPromise();
    return res.coupon;
  }

  public async deleteCoupon(id: string) {
    const res = await this.api.delete(`/coupons/${id}`).toPromise();
    return res.satus === 200;
  }
}
