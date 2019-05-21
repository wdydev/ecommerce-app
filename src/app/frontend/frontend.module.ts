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
import {AddressesComponent} from './addresses/addresses.component';
import {PayementMethodsComponent} from './payement-methods/payement-methods';
import {SearchComponent} from './search/search.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {FaqComponent} from './faq/faq.component';
import {AccountSidebarComponent} from './account-sidebar/account-sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AddressService} from './addresses/address.service';
import {RegisterService} from './register/register.service';
import {MyAccountServices} from './my-account/my-account.services';
import {HomeService} from './home/home.service';
import {ProductService} from './product/product.service';
import {PipesModule} from '../pipes/pipes.module';
import {GuardsModule} from '../guards/guards.module';
import {LoginService} from './login/login.service';
import {AddCardComponent} from './add-card/add.card.component';
import {NgxStripeModule} from 'ngx-stripe';
import {AddCardService} from './add-card/add.card.service';
import {CheckoutService} from './checkout/checkout.service';


@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    PipesModule,
    GuardsModule,
    NgxStripeModule.forRoot('pk_test_UCGXGDKTNIrBPvNzjorGnvoU00jGwcSnvm')
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    RegisterComponent,
    MyAccountComponent,
    OrderHistoryComponent,
    OrderInformationComponent,
    CartComponent,
    CheckoutComponent,
    AddressesComponent,
    PayementMethodsComponent,
    CategoryComponent,
    ProductComponent,
    SearchComponent,
    AboutUsComponent,
    ConfirmationComponent,
    FaqComponent,
    AccountSidebarComponent,
    AddCardComponent,
  ],
  providers: [
    AddressService,
    RegisterService,
    MyAccountServices,
    HomeService,
    ProductService,
    LoginService,
    AddCardService,
    CheckoutService,
  ],
})
export class FrontendModule {

}
