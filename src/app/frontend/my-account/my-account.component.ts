import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../../services/modal.service';

import {User, UserI} from '../../entity/user';
import {Router} from '@angular/router';
import {MyAccountServices} from './my-account.services';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-myaccount',
  templateUrl: './my-account.component.html'
})

export class MyAccountComponent implements OnInit {
  private userForm: FormGroup;
  private passwordForm: FormGroup;

  private user: UserI;

  constructor(
    private  modal: ModalService,
    private service: MyAccountServices,
    private router: Router,
    private userService: UserService) {

    this.user = userService.user;
  }

  public async getUser() {
    this.user = await this.service.getUser(this.user._id);
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name),
      email: new FormControl(this.user.email),
      mobile: new FormControl(this.user.mobile, Validators.required),
    });

    this.passwordForm = new FormGroup({
      oldPassword: new FormControl(),
      newPassword: new FormControl('', Validators.required),
    });
  }

  public async updateUser() {
    const user = await this.service.changeUser(this.user._id, this.userForm.value);
    if (!user) {
      return;
    }
    this.userService.user = user;
  }

  public async changePassword() {
    const user = await this.service.changePassword(this.user._id, this.passwordForm.value);
  }

  public ngOnInit(): void {
    this.getUser();
  }

}
