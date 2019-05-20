import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {ActivatedRoute} from '@angular/router';
import {UserI} from '../../entity/user';

@Component({
  selector: 'app-admin-user',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  private id: string;

  constructor(private modal: ModalService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      this.id = param.id;
    });
  }



}

