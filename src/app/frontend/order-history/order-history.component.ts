import {Component, OnInit} from '@angular/core';
import {Order} from '../../entity/order';
import {FormGroup} from '@angular/forms';
import {ModalService} from '../../services/modal.service';
import {OrderHistoryService} from './order-history.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './order-history.component.html'
})

export class OrderHistoryComponent implements OnInit {

  public address: Order;
  public ordersForm: FormGroup;
  public orders: Array<Order>;

  constructor(private  modal: ModalService, private service: OrderHistoryService) {
    this.orders = [];
  }

  public async loadProducts() {
    this.orders = await this.service.getOrders();
  }

  public ngOnInit(): void {
    this.loadProducts();
  }


}
