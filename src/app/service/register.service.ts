
import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import { User } from '../user'

@Injectable()
export class RegisterService {
  token: string;
  posts_Url: string = 'http://5.9.144.226:6001/register';
  constructor(public _http: Http) {
  }
  registerUser(user: User) {
    console.log(user)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.posts_Url, JSON.stringify(user), options).map(res => res.json())
  }

  addTask(user) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let access_token = localStorage.getItem('access_token');
    console.log(access_token);
    headers.append("Authorization", access_token);
    // return this._http.post('http://192.168.1.5:6001/add_task', JSON.stringify(user), { headers: headers })
    return this._http.post('http://5.9.144.226:6001/add_task', JSON.stringify(user), { headers: headers })
      .map(res => res.json());
  }


}