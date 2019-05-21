import {NgModule} from '@angular/core';
import {CartCalc} from './cart.calc';
import {StatusPipe} from './status.pipe';
import {OrderStatusPipe} from './order.status.pipe';

@NgModule({
  declarations: [
    CartCalc,
    StatusPipe,
    OrderStatusPipe
  ],
  exports: [
    CartCalc,
    StatusPipe,
    OrderStatusPipe
  ]
})
export class PipesModule {

}
