import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {routes} from './frontend.routes';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {RegisterComponent} from './register/register.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {OrderInformationComponent} from './order-information/order-information.component';




@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    LoginComponent ,
    SidebarComponent ,
    RegisterComponent,
    MyAccountComponent,
    OrderHistoryComponent,
    OrderInformationComponent,
    CartComponent,
    CheckoutComponent,
    CategoryComponent,
    ProductComponent
  ],
  providers: [],
})
export class FrontendModule {

}
