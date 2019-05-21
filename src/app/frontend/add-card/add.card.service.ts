import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {UserService} from '../../services/user.service';

@Injectable()
export class AddCardService {
  constructor(private api: ApiService, private service: UserService) {
  }

  public async saveCard(data: any): Promise<any> {
    const res: any = await this.api.post(`/users/${this.service.user._id}/payments`, data).toPromise();
    if (!res || !res.card) {
      return false;
    }

    const user = this.service.user;
    if (!user.payments) {
      user.payments = [];
    }
    user.payments.push(res.card);

    this.service.user = user;

    return true;
  }
}
