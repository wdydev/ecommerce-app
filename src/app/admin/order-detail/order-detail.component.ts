import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {ActivatedRoute} from '@angular/router';
import {OrderDetailService} from './order-detail.service';
import {Order} from '../../entity/order';

@Component({
  selector: 'app-admin-user',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent {
  private id: string;
  private order: Order;

  constructor(private modal: ModalService, private route: ActivatedRoute, private service: OrderDetailService) {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.loadOrder();
    });
  }

  public async loadOrder() {
    this.order = await this.service.getOrder(this.id);
  }


}

