import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {routes} from './admin.routes';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CategoryComponent} from './category/category.component';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';
import {CouponsComponent} from './coupons/coupons.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SidebarComponent,
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    OrdersComponent,
    CouponsComponent
  ],
  providers: [],
})
export class AdminModule {

}
