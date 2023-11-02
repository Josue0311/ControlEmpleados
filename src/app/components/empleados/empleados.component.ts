import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/models/models';
import { EmpleadosService} from 'src/app/services/empleados.service'


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados:Empleados[]=[];
  private logo:string='src/assets/Logo.png';
  constructor(private empleadosService:EmpleadosService){
  }
  ngOnInit() {
    this.empleadosService.getEmpleados().subscribe((dato: any)=>{
      console.log(dato);
      this.empleados=dato.data;
      console.log(this.empleados);
    });
  }
}
