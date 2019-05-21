import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {ApiService} from '../services/api.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private api: ApiService, private router: Router) {

  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    return this.api
      .get(`/users/token/${token}`)
      .toPromise()
      .then(res => res.user)
      .then(user => {
        if (!user) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      }).catch(() => {
        this.router.navigate(['login']);
        return false;
      });
  }
}
