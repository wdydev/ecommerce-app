import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  constructor(private modal: ModalService) {

  }

}
