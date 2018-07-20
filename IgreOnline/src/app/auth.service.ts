import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from 'user';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   const jwtHelper = new JwtHelperService();
  //   if (token) {
  //     if (jwtHelper.isTokenExpired(token)) {
  //       localStorage.clear();
  //     }
  //    return !jwtHelper.isTokenExpired(token);
  //   } else {
  //     return false;
  //   }
  // }

  public login(user: User): Observable<any> {
    return this.http.post<any>(environment + '/auth/login', user);
  }
  public register(user: User): Observable<any> {
    return this.http.post<any>(environment + '/auth/register', user);
  }
}
