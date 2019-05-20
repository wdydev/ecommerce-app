import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {UserI} from '../../entity/user';

@Injectable()
export class UserDeatilService {
  constructor(private api: ApiService) {
  }


  public async getUser(id: string):Promise<UserI> {
    const res = await this.api.get(`/users/${id}`).toPromise();
     return res.user;
  }


}
