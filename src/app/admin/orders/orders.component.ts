import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {OrdersService} from './orders.service';
import {Order} from '../../entity/order';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../entity/user';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  public order: Order;
  public orders: Array<Order>;

  constructor(private modal: ModalService, private service: OrdersService) {

  }

  public async loadOrders() {
    this.orders = await this.service.getOrders();
  }

  public async updateStatus(event: any, order: Order) {
    const status = +event.target.value;
    const updated = await this.service.updateOrder({...order, status});
    if (updated) {
      // @ts-ignore
      order.status = status;
    }
  }

  public ngOnInit(): void {
    this.loadOrders();
  }

}
