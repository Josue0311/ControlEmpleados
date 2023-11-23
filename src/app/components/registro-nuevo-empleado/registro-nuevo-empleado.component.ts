import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departamentos, Empleados } from 'src/app/models/models';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { RegistroNuevoEmpleadoService } from 'src/app/services/registro-nuevo-empleado.service'

@Component({
  selector: 'app-registro-nuevo-empleado',
  templateUrl: './registro-nuevo-empleado.component.html',
  styleUrls: ['./registro-nuevo-empleado.component.css']
})
export class RegistroNuevoEmpleadoComponent implements OnInit {
  forma!: FormGroup;
  errorMessage!: String;
  Alert: boolean = false;
  departamento: Departamentos[] = [];



  constructor(private fb: FormBuilder, private router: Router, private departamentos: DepartamentosService, private registroEmpleados: RegistroNuevoEmpleadoService) {
    console.log('LoginComponent se ha inicializado');
    this.crearFormulario();
  }
  ngOnInit() {
    this.departamentos.getDepartamentos().subscribe((dato: any) => {
      this.departamento = dato.data
      console.log(this.departamento);
    });
  }

  crearFormulario() {
    this.forma = this.fb.group({
      Nombre: ["", Validators.required],
      Apellido: ["", Validators.required],
      FechaNacimiento: ["", Validators.required],
      Direccion: ["", Validators.required],
      Telefono: ["", Validators.required],
      CorreoElectronico: ["", Validators.required],
      Departamento: ["", Validators.required],
    })
  }
  crear() {
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
  }

  Registro() {
    if (this.forma.valid) {
      const dato: Empleados = {
        Nombre: this.forma.controls['Nombre'].value,
        Apellido: this.forma.controls['Apellido'].value,
        FechaNacimiento: this.forma.controls['FechaNacimiento'].value,
        Direccion: this.forma.controls['Direccion'].value,
        Telefono: this.forma.controls['Telefono'].value,
        CorreoElectronico: this.forma.controls['CorreoElectronico'].value,
        DepartamentoID: this.forma.controls['Departamento'].value
      }
      console.log(dato);
      this.registroEmpleados.RegistrarEmpleado(dato).subscribe((dato:any)=>{
        console.log(dato);
        
      });
    } else {
      console.log("Datos incorrectos");
      
    }
  }
}
