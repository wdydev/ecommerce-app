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
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name),
      email: new FormControl(this.user.email),
      mobile: new FormControl(this.user.mobile, Validators.required),
    });

    this.passwordForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  public async getUser() {
    this.user = await this.service.getUser(this.user._id);
    this.userForm.patchValue(this.user);
  }

  public async updateUser() {
    const user = await this.service.changeUser(this.user._id, this.userForm.value);
    if (!user) {
      return;
    }
    this.userService.user = user;
  }

  public async changePassword() {
    try {
      if (this.passwordForm.invalid) {
        throw new Error('Please fill in correct data.');
      }

      const data = this.passwordForm.value;
      if (!data) {
        throw new Error('Data is empty.');
      }

      if (data.newPassword !== data.confirmPassword) {
        throw new Error('Passwords do not match.');
      }

      const user = await this.service.changePassword(this.user._id, data);
    } catch (e) {
      console.log(e.message);
    }
  }

  public ngOnInit(): void {
    this.getUser();
  }

}
