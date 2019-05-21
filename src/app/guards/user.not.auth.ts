import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {ApiService} from '../services/api.service';

@Injectable()
export class UserNotAuth implements CanActivate {
  constructor(private api: ApiService) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return true;
    }
    return this.api
      .get(`/users/token/${token}`)
      .toPromise()
      .then(res => res.user)
      .then(user => !user)
      .catch(() => {
        return true;
      });
  }
}
