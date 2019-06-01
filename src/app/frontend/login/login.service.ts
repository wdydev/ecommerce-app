import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {UserI} from '../../entity/user';
import {UserService} from '../../services/user.service';

@Injectable()
export class LoginService {
  constructor(private api: ApiService, private service: UserService) {

  }

  public async doLogin(data: UserI): Promise<boolean> {
    const user: any = await this.api.post('/users/auth', data).toPromise();
    if (!user || user.status !== 200) {
      throw new Error('User not found.');
    }

    this.service.user = user.user;
    this.service.token = user.user.token;
    this.service.type = 'user';

    return true;
  }
}
