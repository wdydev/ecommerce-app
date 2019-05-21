import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {UserI} from '../../entity/user';

@Injectable()
export class LoginService {
  constructor(private api: ApiService) {

  }

  public async doLogin(data: UserI): Promise<boolean> {
    const user: any = await this.api.post('/users/auth', data).toPromise();
    if (!user || user.status !== 200) {
      throw new Error('User not found.');
    }

    localStorage.setItem('user', JSON.stringify(user.user));
    localStorage.setItem('token', user.user.token);
    localStorage.setItem('userType', 'user');

    return true;
  }
}
