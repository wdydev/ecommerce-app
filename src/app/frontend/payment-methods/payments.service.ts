import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Payment} from '../../entity/Payment';
import {UserI} from '../../entity/user';
import {promise} from 'selenium-webdriver';

@Injectable()
export class PaymentsService {
  private user: UserI;

  constructor(private api: ApiService) {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
  }

  public async getPaymentMethos(): Promise<Array<Payment>> {
    const res = await this.api.get(`/users/${this.user._id}/payments`).toPromise();
    return res.payments || [];
  }

  public async savePaymentMehod(data) {
    const res = await this.api.post(`/users/${this.user._id}/payments`, data).toPromise();
    return res.payment;
  }

  public async deletePaymentMethod(id: string) {
    const res = await this.api.delete(`/users/${this.user._id}/payments/${id}`).toPromise();
    return res.status === 200;
  }

}
