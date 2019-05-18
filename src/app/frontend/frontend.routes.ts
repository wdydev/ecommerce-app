import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {OrderInformationComponent} from './order-information/order-information.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },
  {
    path: 'order-information',
    component: OrderInformationComponent
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
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

