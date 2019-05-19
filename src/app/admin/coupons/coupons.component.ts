import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {Category} from '../../entity/category';
import {Coupon, CouponI} from '../../entity/coupon';
import {FormControl, FormGroup} from '@angular/forms';
import {CouponService} from './coupon.service';

@Component({
  selector: 'app-admin-coupons',
  templateUrl: './coupons.component.html'
})
export class CouponsComponent {

  private coupon: CouponI;
  private form: FormGroup;

  constructor(private modal: ModalService, private service: CouponService) {

  }

  private viewCoupon(template: TemplateRef<any>): any {
    this.modal.open(template);

  }

  public async couponForm(template: TemplateRef<any>, coupon: any = {}) {
    this.coupon = new Coupon(coupon);
    this.form = new FormGroup({
      code: new FormControl(),
      discountType: new FormControl(),
      discountAmount: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      minimumCost: new FormControl(),
      maximumCost: new FormControl(),
      status: new FormControl()
    });
    const res = await this.modal.open(template);
  }


  public async saveCoupon() {
    // console.log(this.form.value);
    await this.service.saveCoupon(this.form.value);
  }


  public cancel(): void {
    this.modal.close();
  }

}
