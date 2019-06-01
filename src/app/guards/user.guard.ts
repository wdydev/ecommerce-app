import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {ApiService} from '../services/api.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from '../services/user.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private api: ApiService, private router: Router, private userService: UserService) {

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
        this.userService.user = user;
        return true;
      }).catch(() => {
        this.router.navigate(['login']);
        return false;
      });
  }
}
