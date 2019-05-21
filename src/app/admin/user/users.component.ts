import {ModalService} from '../../services/modal.service';
import {User, UserI} from '../../entity/user';
import {UsersService} from './users.service';
import {Component, TemplateRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  public form: FormGroup;
  public user: UserI;
  public users: Array<UserI>;

  constructor(private modal: ModalService, private service: UsersService) {
    this.users = [];
  }


  public getUser(user: User) {
    const res = this.service.getUser(user._id);
    if (res) {
      this.users = this.users.filter(x => x._id !== user._id);
    }
  }


  public async userForm(template: TemplateRef<any>, user: any = {}) {
    this.user = new User(user);
    this.form = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
    });
    const res = await this.modal.open(template);
  }


  public deleteUser(user: User) {
    const res = this.service.deleteUser(user._id);
    if (res) {
      this.users = this.users.filter(x => x._id !== user._id);
    }
  }

  public async loadUsers() {
    this.users = await this.service.getUsers();
  }

  public ngOnInit(): void {
    this.loadUsers();
  }

  public cancel(): void {
    this.modal.close();
  }

}
