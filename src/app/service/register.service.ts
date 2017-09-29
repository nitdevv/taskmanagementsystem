import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../user';
import { constant } from '../api';

@Injectable()
export class RegisterService {
  _url: string = constant.url;
  constructor(private http: Http) { }

  signup(user: any) {
    console.log("hi")
    console.log(user)
    return this.http.get(this._url)
      .map((res: Response) => res.json());
  }


}
