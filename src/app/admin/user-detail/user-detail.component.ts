import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  constructor(private modal: ModalService) {

  }

}
