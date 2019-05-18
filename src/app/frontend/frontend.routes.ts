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
<<<<<<< HEAD
import {AddressesComponent} from './addresses/addresses.component';
import {PayementMethodsComponent} from './payement-methods/payement-methods';
=======
import {SearchComponent} from './search/search.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {FaqComponent} from './faq/faq.component';
>>>>>>> 5b1c4bd0617d556cb7901fef7f41d36d0796fb93

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'my-account',
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
      }
    ]
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },
  {
    path: 'order-history/:id',
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
  },

<<<<<<< HEAD
=======
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
    path: 'confirmation', component: ConfirmationComponent
  },
  {
    path: 'faq', component: FaqComponent
  }
>>>>>>> 5b1c4bd0617d556cb7901fef7f41d36d0796fb93
];

