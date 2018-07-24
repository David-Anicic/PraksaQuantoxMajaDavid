import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartPlayTheGameService {

  constructor(private http: HttpClient) { }

  startTheGame(id: number): Observable<any>
  {
    const bearerHeader: string = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly90aWN0YWN0b2UubG9jYWw6ODAwMC9hcGkvdXNlcnMvbG9naW4iLCJpYXQiOjE1MzI0MjkwMTksImV4cCI6MTUzMjQzMjYxOSwibmJmIjoxNTMyNDI5MDE5LCJqdGkiOiJWQWU4Q2JyVFc0VFBWUEhaIn0.3N6top2upa9I5jOWub8XNcRAdt5bbh7M10dBiH29EyU';
    const headers = new HttpHeaders().set('Authorization', bearerHeader);
    headers.set('Accept', 'application/json');

    const url = environment.serverUrl + 'games/' + id;

    const formData = new FormData();

    return this.http.post<any>(url, formData, { headers: headers });
  }
}
