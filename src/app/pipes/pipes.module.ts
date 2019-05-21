import {NgModule} from '@angular/core';
import {CartCalc} from './cart.calc';
import {StatusPipe} from './status.pipe';
import {OrderStatusPipe} from './order.status.pipe';
import {OrderCalc} from './order.calc';

@NgModule({
  declarations: [
    CartCalc,
    StatusPipe,
    OrderStatusPipe,
    OrderCalc
  ],
  exports: [
    CartCalc,
    StatusPipe,
    OrderStatusPipe,
    OrderCalc
  ]
})
export class PipesModule {

}
