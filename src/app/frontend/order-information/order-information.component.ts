import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {ActivatedRoute} from '@angular/router';
import {OrderInformationService} from './order-information.service';
import {Order} from '../../entity/order';

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html'
})
export class OrderInformationComponent {
  private id: string;
  private order: Order;

  constructor(private modal: ModalService, private route: ActivatedRoute, private service: OrderInformationService) {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.loadOrder();
    });
  }

  public async loadOrder() {
    this.order = await this.service.getOrder(this.id);
  }
}

