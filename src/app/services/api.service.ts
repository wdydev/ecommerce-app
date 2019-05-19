import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private client: HttpClient) {
  }

  private modifyArgs(args: any) {
    // create full url
    const url = args[0]
      .split('/')
      .filter(param => !!param && param.length > 0)
      .join('/');

    args[0] = environment.apiEndpoint + url;
    return args;
  }

  public get(url: string): Observable<any> {
    return this.client.get.apply(this.client, this.modifyArgs(arguments));
  }

  public post(url: string, data: any): Observable<any> {
    return this.client.post.apply(this.client, this.modifyArgs(arguments));
  }

  public patch(url: string): Observable<any> {
    return this.client.post.apply(this.client, this.modifyArgs(arguments));
  }

  public put(url: string): Observable<any> {
    return this.client.post.apply(this.client, this.modifyArgs(arguments));
  }

  public delete(url: string): Observable<any> {
    return this.client.post.apply(this.client, this.modifyArgs(arguments));
  }

}
