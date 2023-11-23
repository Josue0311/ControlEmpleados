import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/models';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forms!: FormGroup;
  mostrarPassword: boolean = false;
  errorMessage!: String;
  Alert: boolean = false;
  mostrarModal = false;


  constructor(private fb: FormBuilder, private login: LoginService, private router: Router) {
    console.log('LoginComponent se ha inicializado');
    this.crearFormulario();
  }

  ngOnInit() {

  }
  mostrarAlerta() {

  }

  cerrarAlerta() {
    this.mostrarModal = false;
  }
  mostrarContra() {
    this.mostrarPassword = !this.mostrarPassword;

  }

  crearFormulario() {
    this.forms = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }
  crear() {
    if (this.forms.invalid) {
      return Object.values(this.forms.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
  }

  entrar() {
    if (this.forms.valid) {
      const datos: Login = {
        Contraseña: this.forms.controls['password'].value,
        Usuario: this.forms.controls['email'].value,
      }
      console.log(datos);
      
      this.login.login(datos).subscribe(
        resp => {
          console.log(resp);
          const swalOptions = {
            title: 'Estamos procesando tus datos... <div class="spinner-border" role="status"></div>',
            icon: 'info' as SweetAlertIcon,
            showConfirmButton: false,
            onBeforeOpen: () => {
              Swal.showLoading();
            }
          };
      
          Swal.fire(swalOptions);
          setTimeout(() => {
            // Cierra la alerta después de la operación (en este caso, después de 3 segundos)
            Swal.close();
            this.router.navigate(['/inicio']);
          }, 3000);
        },
        error => {
          if (error.status === 409) {
            this.Alert = true;
            this.errorMessage = error.error.message;
            console.error('Error 409:', this.errorMessage);
            console.log(this.errorMessage);

            Swal.fire({
              title: this.errorMessage.toString(),
              icon: 'error',
              confirmButtonText: 'Cerrar',
              timer: 2500,  // 3 segundos
              timerProgressBar: true,  // Muestra una barra de progreso
              showConfirmButton: false  // No muestra el botón "Cerrar"
            });
            
          } else {
            this.Alert = true;
            this.errorMessage = "Ocurrio un error en el servidor";
            Swal.fire({
              title: this.errorMessage.toString(),
              icon: 'error',
              confirmButtonText: 'Cerrar',
              timer: 2500,  // 3 segundos
              timerProgressBar: true,  // Muestra una barra de progreso
              showConfirmButton: false  // No muestra el botón "Cerrar"
            });
          }
        }
      );
    } else {
      this.Alert = true;
      this.errorMessage = "Llene todos los campos";
      Swal.fire({
        title: 'Llene todos los campos',
        icon: 'warning', // Puedes usar 'success', 'error', 'warning', 'info', etc.
        confirmButtonText: 'Cerrar',
        timer: 2000,  // 3 segundos
        timerProgressBar: true,  // Muestra una barra de progreso
        showConfirmButton: false  // No muestra el botón "Cerrar"
      });
    }
  }
  registro() {
    this.router.navigate(['/register']);
  }
  closeBootstrapAlert() {
    this.Alert = false;
  }

}
