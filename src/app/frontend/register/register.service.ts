import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {User} from '../../entity/user';

@Injectable()
export class RegisterService {
  constructor(private api: ApiService) {
  }

  public async addUser(data) {
    const res = await this.api.post('/users', data).toPromise();
    return res.user;
  }

}
