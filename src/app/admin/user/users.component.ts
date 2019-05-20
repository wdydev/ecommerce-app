import {ModalService} from '../../services/modal.service';
import {User, UserI} from '../../entity/user';
import {UsersService} from './users.service';
import {Component, TemplateRef} from '@angular/core';


@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  private user: UserI;
  private users: Array<UserI>;

  constructor(private modal: ModalService, private service: UsersService) {
    this.users = [];
  }

  private viewUser(template: TemplateRef<any>): any {
    this.modal.open(template);
  }


  public deleteUser(user: User) {
    const res = this.service.deleteUser(user._id);
    if (res) {
      this.users = this.users.filter(x => x._id !== user._id);
    }
  }

  public cancel(): void {
    this.modal.close();
  }

}
