import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {UserI} from '../../entity/user';

@Injectable()
export class UsersService {
  constructor(private api: ApiService) {
  }

  public async getUsers(): Promise<Array<UserI>> {
    const res = await this.api.get('/users').toPromise();
    return res.users || [];
  }


  public async deleteUser(id: string) {
    const res = await this.api.delete(`/users/${id}`).toPromise();
    return res.status === 200;
  }

  public async updateUser(id: string) {
    const res = await this.api.get(`/users/${id}`).toPromise();
    return res.status === 200;
  }
  public async getUser(id: string) {
    const res = await this.api.get(`/users/${id}`).toPromise();
     return res.status === 200;
  }


}
