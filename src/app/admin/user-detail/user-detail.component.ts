import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {ActivatedRoute} from '@angular/router';
import {UserI} from '../../entity/user';
import {UserDeatilService} from './user-detail.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  private id: string;
  private user: UserI;

  constructor(private modal: ModalService, private route: ActivatedRoute, private service: UserDeatilService) {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.loadUser();
    });
  }

  public async loadUser() {
    this.user = await this.service.getUser(this.id);
  }


}

