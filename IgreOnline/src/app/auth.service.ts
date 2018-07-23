import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from 'User';
import { Observable } from 'rxjs';
import { Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  /*
  public login(user: User): Observable<any> {
    return this.http.post<any>(environment.serverUrl + 'users/login', user);
  }
  public register(user: User): Observable<any> {
    return this.http.post<any>(environment.serverUrl + 'users/register', user);
  }*/

  login(email: string, password: string) {
    const header = new HttpHeaders();
    header.set('Accept', 'application/json');

    const fd = new FormData();
    fd.append('email', email);
    fd.append('password', password);

    console.log('prijavljeno');
    return this.http.post(environment.serverUrl + 'users/login', fd, { headers: header });
  }

  register(name: string, email: string, password: string, password_confirmation: string): Observable<any> {
    const header = new HttpHeaders();
    header.set('Accept', 'application/json');

    const fd = new FormData();
    fd.append('email', email);
    fd.append('password', password);
    fd.append('name', name);
    fd.append('password_confirmation', password_confirmation);

    console.log('registrovano');
    return this.http.post(environment.serverUrl + 'users/register', fd, { headers: header });
  }


  // register(user: User): Observable<any> {
  //   const header = new HttpHeaders();
  //   header.set('Accept', 'application/json');

  //   const fd = new FormData();
  //   fd.append('email', user.email);
  //   fd.append('password', user.password);
  //   fd.append('name', user.name);

  //   console.log('registrovano');
  //   return this.http.post(environment.serverUrl + 'users/register', fd, { headers: header });
  // }

  // register(user: User, password: string, password_confirmation: string): Observable<any> {
  //   const header = new HttpHeaders();
  //   header.set('Accept', 'application/json');

  //   const fd = new FormData();
  //   fd.append('email', user.email);
  //   fd.append('password', user.password);
  //   fd.append('name', user.name);
  //   fd.append('password_confirmation', password_confirmation);

  //   console.log('registrovano');
  //   return this.http.post(environment.serverUrl + 'users/register', fd, { headers: header });
  // }
}
