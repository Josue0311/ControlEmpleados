import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private BackendURL='http://localhost:3000/'

  constructor(private http: HttpClient) { }

  login(dato:any): Observable<any>{
    return this.http.post(`${this.BackendURL}api/login`, dato)
  }
}
