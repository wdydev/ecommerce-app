import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {LoginComponent} from './login/login.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';

export const routes: Routes = [
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
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'product', component: ProductComponent
  }
]
