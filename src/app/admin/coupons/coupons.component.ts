import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {Category} from '../../entity/category';
import {Coupon, CouponI} from '../../entity/coupon';

@Component({
  selector: 'app-admin-coupons',
  templateUrl: './coupons.component.html'
})
export class CouponsComponent {

  private  coupon: CouponI;
  constructor(private modal: ModalService) {

  }
  private viewCoupon(template: TemplateRef<any>): any {
    this.modal.open(template);

  }

  public couponForm(template: TemplateRef<any>, coupon: any = {}) {
    this.coupon = new Coupon(coupon);
    this.modal.open(template);
  }

}
