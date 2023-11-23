import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistroNuevoEmpleadoService {
  private BackendURL='http://localhost:3000/'

  constructor(private http: HttpClient) { }

  RegistrarEmpleado(dato:any){
    return this.http.post(`${this.BackendURL}api/post/empleados`, dato)
  }
}
