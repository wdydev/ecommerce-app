import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CategoryComponent} from './category/category.component';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';
import {CouponsComponent} from './coupons/coupons.component';
import {UsersComponent} from './user/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'orders',
    children: [
      {
        path: '',
        component: OrdersComponent
      },
      {
        path: ':id',
        component: OrderDetailComponent
      }
    ]

  },
  {
    path: 'coupons',
    component: CouponsComponent
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: ':id',
        component: UserDetailComponent
      }
    ]
  }
];
