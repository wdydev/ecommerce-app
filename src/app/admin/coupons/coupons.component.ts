import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
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
  private coupons: Array<CouponI>;


  constructor(private modal: ModalService, private service: CouponService) {
    this.coupons = [];
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
    console.log(this.form.value);
    const coupon: CouponI = await this.service.saveCoupon(this.form.value);

    if (this.coupon._id) {
      this.coupons = this.coupons.map(c => {
        if (c._id === this.coupon._id) {
          return coupon;
        }
        return c;
      });
      this.modal.close();
      return;
    }
    this.coupons.push(coupon);
  }

  public deleteCoupon(coupon: Coupon) {
    const res = this.service.deleteCoupon(coupon._id);
    if (res) {
      this.coupons = this.coupons.filter(x => x._id !== coupon._id);
    }

  }

  public async loadCoupons() {
    this.coupons = await this.service.getCoupons();
  }

  public ngOnInit(): void {
    this.loadCoupons();
  }


  public cancel(): void {
    this.modal.close();
  }

}
