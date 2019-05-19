import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CategoryI} from '../../entity/category';

@Injectable()
export class CouponService {
  constructor(private api: ApiService) {
  }

  public async getCoupons(): Promise<Array<CategoryI>> {
    const res = await this.api.get('/coupons').toPromise();
    console.log(res);
    return null;
  }

  public async saveCoupon(data) {
  const res = await this.api.post('/coupons', data).toPromise();
  console.log(res);
  }
}
