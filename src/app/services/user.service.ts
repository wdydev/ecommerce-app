import {Injectable} from '@angular/core';
import {UserI} from '../entity/user';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService extends Subject<UserI> {
  private currentUser: UserI;
  private userType: string;
  private userToken: string;

  public user$: Subject<UserI>;
  public type$: Subject<string>;
  public token$: Subject<string>;

  constructor() {
    super();
    this.user$ = new Subject();
    this.type$ = new Subject();
    this.token$ = new Subject();
  }

  private readFromStorage(key: string) {
    return localStorage.getItem(key);
  }

  private saveToStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  private readUser(): UserI {
    const user = this.readFromStorage('user');
    this.currentUser = JSON.parse(user);
    return this.currentUser;
  }

  get user() {
    if (!this.currentUser) {
      return this.readUser();
    }
    return this.currentUser;
  }

  set user(user: UserI) {
    this.currentUser = user;
    this.saveToStorage('user', JSON.stringify(user));
    this.user$.next(user);
  }

  get type() {
    return this.userType;
  }

  set type(type: string) {
    this.userType = type;
    this.saveToStorage('userType', type);
    this.type$.next(type);
  }

  get token() {
    return this.userType;
  }

  set token(token: string) {
    this.userToken = token;
    this.saveToStorage('token', token);
    this.token$.next(token);
  }
}
