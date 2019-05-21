import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../../services/modal.service';

import {User} from '../../entity/user';
import {Router} from '@angular/router';
import {MyAccountServices} from './my-account.services';


@Component({
  selector: 'app-myaccount',
  templateUrl: './my-account.component.html'
})

export class MyAccountComponent implements OnInit {
  private userForm: FormGroup;
  private passwordForm: FormGroup;

  private user: User;

  constructor(private  modal: ModalService, private service: MyAccountServices, private router: Router) {
  }

  public async getUser() {
    this.user = await this.service.getUser('5ce301b877e20f4aa49de782');
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
    const user = await this.service.changeUser('5ce301b877e20f4aa49de782', this.userForm.value);
    // localStorage.setItem('token', '{token returned from server}');
    // this.router.navigate(['my-account']);
  }

  public async changePassword() {
    const user = await this.service.changePassword('5ce301b877e20f4aa49de782', this.passwordForm.value);
    // localStorage.setItem('token', '{token returned from server}');
    // this.router.navigate(['my-account']);
  }

  public ngOnInit(): void {
    this.getUser();
  }

}
