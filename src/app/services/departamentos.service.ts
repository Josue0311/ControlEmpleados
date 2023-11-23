import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private BackendURL='http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getDepartamentos(){
    return this.http.get(`${this.BackendURL}api/get/departamentos`)
  }
  getDepartamentosID(Id: number){
    return this.http.get(`${this.BackendURL}api/get/departamentos/${Id}`)
  }
}
