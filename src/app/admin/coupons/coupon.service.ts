import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CouponI} from '../../entity/coupon';

@Injectable()
export class CouponService {
  constructor(private api: ApiService) {
  }

  public async getCoupons(): Promise<Array<CouponI>> {
    const res = await this.api.get('/coupons').toPromise();
    return res.coupons || [];
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
