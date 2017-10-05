
import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import { User } from '../user'

@Injectable()
export class RegisterService {

  posts_Url: string = 'http://5.9.144.226:6001/register';
  constructor(public _http: Http) {
  }
  registerUser(user: User) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', "*");
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.posts_Url, JSON.stringify(user), options).map(res => res.json())
  }

}
