import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {User} from '../../entity/user';

@Injectable()
export class MyAccountServices {
  constructor(private api: ApiService) {
  }

  public async getUser(id) {
    const res = await this.api.get(`/users/${id}`).toPromise();
    return res.user;
  }

  public async changeUser(data) {
    const res = await this.api.patch('/users/1', data).toPromise();
    return res.user;
  }

  public async changePassword(data) {
    const res = await this.api.patch('/users/1/password', data).toPromise();
    return res.user;
  }

}
