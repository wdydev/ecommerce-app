import {Component} from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.html'
})
export class SidebarComponent {
  private links: {
    dashboard: Array<string>
    categories: Array<string>
    products: Array<string>
    orders: Array<string>
    coupons: Array<string>
    shipping?: Array<string>,
    logout?: Array<string>,
    users?: Array<string>,
  };

  constructor() {
    this.links = {
      dashboard: ['', 'admin'],
      categories: ['', 'admin', 'categories'],
      products: ['', 'admin', 'products'],
      orders: ['', 'admin', 'orders'],
      coupons: ['', 'admin', 'coupons'],
      shipping: ['', 'admin', 'shipping'],
      logout: ['', 'admin', 'logout'],
      users: ['', 'admin', 'users'],
    };
  }

}
