import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalService} from '../../services/modal.service';
import {PaymentsService} from './payments.service';
import {Payment} from '../../entity/payment';

@Component({
  selector: 'app-paymentmethods',
  templateUrl: './payments.component.html'
})

export class PayementMethodsComponent implements OnInit {

  private payment: Payment;
  private form: FormGroup;
  private payments: Array<Payment>;
  private addACard: boolean;

  constructor(private  modal: ModalService, private  service: PaymentsService) {
    this.payments = [];
    this.addACard = false;
  }

  public addCard() {
    this.addACard = true;
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
