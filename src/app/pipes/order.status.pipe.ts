import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderStatus',
  pure: true
})
export class OrderStatusPipe implements PipeTransform {
  public transform(status: any, ...args): any {
    if (status === 1) {
      return 'Order received';
    }
    if (status === 2) {
      return 'Order in progress';
    }
    if (status === 3) {
      return 'Order shipped';
    }
    if (status === 4) {
      return 'Order complete';
    }
    if (status === 5) {
      return 'Order cancelled';
    }
  }
}
