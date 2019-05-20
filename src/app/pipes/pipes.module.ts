import {NgModule} from '@angular/core';
import {CartCalc} from './cart.calc';
import {StatusPipe} from './status.pipe';

@NgModule({
  declarations: [
    CartCalc,
    StatusPipe
  ],
  exports: [
    CartCalc,
    StatusPipe
  ]
})
export class PipesModule {
  
}
