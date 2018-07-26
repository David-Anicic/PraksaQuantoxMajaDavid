import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartPlayTheGameService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  startTheGame(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const bearerHeader: string = 'Bearer ' + token;
=======
  startTheGame(id: number): Observable<any>
  {
    const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
>>>>>>> 277331e718cc2aa115c870212d9b7c399e1405e5
    const headers = new HttpHeaders().set('Authorization', bearerHeader);
    headers.set('Accept', 'application/json');

    const url = environment.serverUrl + 'games/' + id;

    const formData = new FormData();

    return this.http.post<any>(url, formData, { headers: headers });
  }
}
