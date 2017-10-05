import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
  posts_Url: string = 'http://5.9.144.226:6001/login';
  constructor(private http: Http) {

  }
  login(email: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.posts_Url, JSON.stringify({ email: email, password: password }), options)
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user))
        }
        console.log(response);
        return user;
      });
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
