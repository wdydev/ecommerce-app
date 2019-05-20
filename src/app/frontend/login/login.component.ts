import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  private form: FormGroup;
  private message: string;

  constructor(private service: LoginService, private router: Router, private cart: CartService) {

  }


  private bootstrap() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public async doLogin() {
    try {
      if (this.form.invalid) {
        throw new Error('Please fill in the form correctly.');
      }

      const authenticated = await this.service.doLogin(this.form.value);
      if (!authenticated) {
        throw new Error('User not found.');
      }

      if (this.cart.getItems().length > 0) {
        this.router.navigate(['checkout']);
        return;
      }

      this.router.navigate(['my-account']);
    } catch (e) {
      console.log(e);
      this.message = e.message;
    }
  }

  public ngOnInit(): void {
    this.bootstrap();
  }
}
