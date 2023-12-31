import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private BackendURL='http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get(`${this.BackendURL}api/get/empleados`)
  }

  getVistaEmpleados(){
    return this.http.get(`${this.BackendURL}api/get/vista-empleados`)
  }
  eliminar(id: number){
    return this.http.delete(`${this.BackendURL}api/delete/empleados/${id}`)
  }
}