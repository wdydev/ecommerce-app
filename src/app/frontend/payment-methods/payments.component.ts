import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalService} from '../../services/modal.service';
import {PaymentsService} from './payments.service';
import {Payment} from '../../entity/payment';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-paymentmethods',
  templateUrl: './payments.component.html'
})

export class PayementMethodsComponent implements OnInit {

  public payment: Payment;
  public form: FormGroup;
  public payments: Array<Payment>;
  public addACard: boolean;

  constructor(private  modal: ModalService, private  service: PaymentsService, private userService: UserService) {
    this.payments = [];
    this.addACard = false;

    userService.user$.subscribe(user => {
      this.payments = user.payments || [];
    });
  }

  public addCard() {
    this.addACard = true;
  }

  public cardAdded() {
    this.addACard = false;
  }

  public async paymentMethodForm(template: TemplateRef<any>, payment: any = {}) {
    this.payment = payment;
    this.form = new FormGroup({
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      zipcode: new FormControl(),
    });

    await this.modal.open(template);
  }

  public async savePaymentMethod() {

  }

  public async deletePaymentMethod(payment: Payment) {
    const res = await this.service.deletePaymentMethod(payment._id);
    if (res === true) {
      this.payments = this.payments.filter(pay => pay._id !== payment._id);
    }
  }

  public canel(): void {
    this.modal.close();
  }

  public async loadPaymentMethods() {
    this.payments = await this.service.getPaymentMethos();
  }

  public ngOnInit(): void {
    this.loadPaymentMethods();
  }

}
