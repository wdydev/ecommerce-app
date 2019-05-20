import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalService} from '../../services/modal.service';
import {RegisterService} from './register.service';
import {User} from '../../entity/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
  private user: User;
  private form: FormGroup;

  constructor(private  modal: ModalService, private service: RegisterService, private router: Router) {
    this.user = null;
  }

  public userForm() {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      password: new FormControl(),

    });
  }

  public async saveUser() {
    const user = await this.service.addUser(this.form.value);
    localStorage.setItem('token', '{token returned from server}');
    this.router.navigate(['my-account']);
  }

  public ngOnInit(): void {
    this.userForm();
  }
}
