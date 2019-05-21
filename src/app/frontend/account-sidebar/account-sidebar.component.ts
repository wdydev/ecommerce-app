import {Component} from '@angular/core';

@Component({
  selector: 'app-account-sidebar',
  templateUrl: './account-sidebar.component.html'
})

export class AccountSidebarComponent {
  public links: {

    myAccount: Array<string>
    addressBooks: Array<string>
    paymentmethods: Array<string>
    orderHistory: Array<string>
  };


  constructor() {
    this.links = {

      myAccount: ['', 'my-account'],
      addressBooks: ['', 'my-account', 'addresses'],
      paymentmethods: ['', 'my-account', 'payment-methods'],
      orderHistory: ['', 'my-account', 'orders'],
    };
  }

}
