import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {LoginComponent} from './login/login.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {RegisterComponent} from './register/register.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {OrderInformationComponent} from './order-information/order-information.component';
import {AddressesComponent} from './addresses/addresses.component';
import {PayementMethodsComponent} from './payment-methods/payments.component';
import {SearchComponent} from './search/search.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {FaqComponent} from './faq/faq.component';
import {UserGuard} from '../guards/user.guard';
import {UserNotAuth} from '../guards/user.not.auth';


export const routes: Routes = [
  {
    path: 'my-account',
    canActivate: [UserGuard],
    children: [
      {
        path: '',
        component: MyAccountComponent,
      },
      {
        path: 'addresses',
        component: AddressesComponent
      },
      {
        path: 'payment-methods',
        component: PayementMethodsComponent
      },
      {
        path: 'orders',
        component: OrderHistoryComponent
      },
      {
        path: 'orders/:id',
        component: OrderInformationComponent
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UserNotAuth]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UserNotAuth]
  },
  {
    path: 'category/:slug',
    component: CategoryComponent
  },

  {
    path: 'product/:slug',
    component: ProductComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'confirmation/:id',
    canActivate: [UserGuard],
    component: ConfirmationComponent
  },
  {
    path: 'checkout',
    canActivate: [UserGuard],
    component: CheckoutComponent
  }

];

