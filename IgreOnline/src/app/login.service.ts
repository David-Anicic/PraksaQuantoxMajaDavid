import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { User } from 'User';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
    // console.log('connected Login');
  }

  // public login(user: User): Observable<any> {
  //   console.log(environment.serverUrl, 'asdsadas');
  //   return this.http.post(environment.serverUrl + 'users/login', user);
  // }

  // login(email: string, password: string) {
  //   const header = new HttpHeaders();
  //   header.set('Accept', 'application/json');

  //   const fd = new FormData();
  //   fd.append('email', email);
  //   fd.append('password', password);

  //   return this.http.post(environment.serverUrl + 'users/login', fd, {headers: header});
  // }
/*
  login(user: User) {
    const header = new HttpHeaders();
    header.set('Accept', 'application/json');

    return this.http.post(environment.serverUrl + 'users/login', user, {headers: header});
  }


  public register(user: User): Observable<any> {
    return this.http.post(environment.serverUrl + 'users/register', user);
  }
*/
}
