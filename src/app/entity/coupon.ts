export interface CouponI {
  code: string;
  discountType: string;
  discountAmount: number;
  startDate: Date;
  endDate: Date;
  minimumCost: number;
  maximumCost: number;
  _id?: string;
}

export class Coupon implements CouponI {
  public code: string;
  public discountType: string;
  public discountAmount: number;
  public startDate: Date;
  public endDate: Date;
  public minimumCost: number;
  public maximumCost: number;
  public status: string;
  // tslint:disable-next-line:variable-name
  public _id?: string;

  constructor(coupon: Coupon) {
    this.code = coupon.code;
    this.discountType = coupon.discountType;
    this.discountAmount = coupon.discountAmount;
    this.startDate = coupon.startDate;
    this.endDate = coupon.endDate;
    this.minimumCost = coupon.minimumCost;
    this.maximumCost = coupon.maximumCost;
    this.status = coupon.status;
    this._id = coupon._id;

  }
}
