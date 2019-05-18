import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {routes} from './frontend.routes';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    CartComponent,
    CheckoutComponent
  ],
  providers: [],
})
export class FrontendModule {

}
