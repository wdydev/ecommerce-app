import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {OrdersService} from './orders.service';
import {Order} from '../../entity/order';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../entity/user';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent {
private order:Order;
private form: FormGroup;
private orders: Array<Order>;

  constructor (private modal:ModalService, private service: OrdersService){

  }

  public async loadOrders() {
    this.orders = await this.service.getOrders();
  }

  public ngOnInit(): void {
    this.loadOrders();
  }

}
