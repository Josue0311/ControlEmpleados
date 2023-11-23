import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/models/models';
import { EmpleadosService} from 'src/app/services/empleados.service'
import { DepartamentosService} from 'src/app/services/departamentos.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleado:{ID: number, Nombre: string, Apellido:string, Puesto:string, Departamento:string}[]=[];

  constructor(private empleadosService:EmpleadosService, private departamento: DepartamentosService){
  }
  ngOnInit() {
    this.empleadosService.getVistaEmpleados().subscribe((dato: any)=>{
      this.empleado=dato.data
      console.log(this.empleado);      
    });
  }

  eliminar(id:number){
    console.log(id);
    this.empleadosService.eliminar(id).subscribe(
      () => {
        console.log('Empleado eliminado con éxito');
        // Aquí puedes realizar acciones adicionales después de la eliminación si es necesario
      },
      error => {
        if (error.status === 200) {
          console.log('Empleado eliminado con éxito');
          // Aquí puedes realizar acciones adicionales después de la eliminación si es necesario
        } else {
          console.error('Error al eliminar empleado:', error);
          // Manejo de errores, puedes mostrar un mensaje de error o realizar otras acciones
        }
      }
    );
  }
}