import {Pipe, PipeTransform} from '@angular/core';
import {CartItem} from '../entity/cart.item';

@Pipe({
  name: 'cartCalc',
  pure: true
})

export class CartCalc implements PipeTransform {
  public transform(value: any, ...args): any {
    const type = args.pop();
    if (type === 'total') {
      return this.total(value);
    }
    if (type === 'sub-total') {
      return this.subTotal(value);
    }
    if (type === 'tax') {
      return this.tax(value);
    }
  }

  public total(items: Array<CartItem>): number {
    return items.reduce((sum: number, item: CartItem) => sum + item.price, 0);
  }

  public subTotal(items: Array<CartItem>): number {
    return items.reduce((sum: number, item: CartItem) => sum + item.price, 0);
  }

  public tax(items: Array<CartItem>): number {
    return 0;
  }
}
