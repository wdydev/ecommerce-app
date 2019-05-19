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
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryService} from './category/category.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    SidebarComponent,
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    OrdersComponent,
    CouponsComponent
  ],
  providers: [
    CategoryService
  ],
})
export class AdminModule {

}
