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
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {AwsUploadComponent} from '../components/aws.upload.component';
import {UsersComponent} from './user/users.component';
import {CouponService} from './coupons/coupon.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TooltipModule.forRoot(),
  ],
  declarations: [
    SidebarComponent,
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    OrdersComponent,
    CouponsComponent,
    AwsUploadComponent,
    UsersComponent
  ],
  providers: [
    CategoryService,
    CouponService
  ],
})
export class AdminModule {

}
