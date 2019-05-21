import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {ActivatedRoute} from '@angular/router';
import {UserI} from '../../entity/user';
import {UserDeatilService} from './user-detail.service';
import {Order} from '../../entity/order';

@Component({
  selector: 'app-admin-user',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  private id: string;
  private user: UserI;
  private orders: Array<Order>;

  constructor(private modal: ModalService, private route: ActivatedRoute, private service: UserDeatilService) {
    this.orders = [];

    this.route.params.subscribe(param => {
      this.id = param.id;
      this.loadUser();
      this.loadOrders();

    });
  }

  public async loadUser() {
    this.user = await this.service.getUser(this.id);
  }

  public async loadOrders() {
    this.orders = await this.service.getOrders(this.id);
  }

}

