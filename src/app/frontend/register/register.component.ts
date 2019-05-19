import {Component} from '@angular/core';
import {Register} from 'ts-node';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  private form: FormGroup;
}


