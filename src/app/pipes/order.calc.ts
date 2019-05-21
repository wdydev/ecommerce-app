import {Pipe, PipeTransform} from '@angular/core';
import {CartItem} from '../entity/cart.item';
import {Order} from '../entity/order';

@Pipe({
  name: 'orderCalc',
  pure: true
})

export class OrderCalc implements PipeTransform {
  public transform(value: any, ...args): any {
    const type = args.pop();
    if (type === 'total') {
      return this.total(value);
    }
    if (type === 'sub-total') {
      return this.subTotal(value);
    }
    if (type === 'shipping') {
      return this.shipping();
    }
  }

  public total(items: Array<CartItem>): number {
    if (items.length === 0) {
      return 0;
    }
    return items.reduce((sum: number, item: CartItem) => sum + item.price, 0) + 7.99;
  }

  public shipping(): number {
    return 7.99;
  }

  public subTotal(items: Array<CartItem>): number {
    return items.reduce((sum: number, item: CartItem) => sum + item.price, 0);
  }

}
