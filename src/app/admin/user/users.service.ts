import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CategoryI} from '../../entity/category';

@Injectable()
export class UsersService {
  constructor(private api: ApiService) {
  }

  public async getUsers(): Promise<Array<CategoryI>> {
    const res = await this.api.get('/users').toPromise();
    return res;
  }


  public async deleteUser(id: string) {
    const res = await this.api.delete(`/users/${id}`).toPromise();
    return res.satus === 200;
  }

  public async updateUser(id: string) {
    const res = await this.api.delete(`/users/${id}`).toPromise();
    return res.satus === 200;
  }

}
