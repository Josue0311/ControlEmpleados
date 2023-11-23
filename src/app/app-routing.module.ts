import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent} from 'src/app/components/empleados/empleados.component';
import { LoginComponent} from 'src/app/components/login/login.component';
import { HomeComponent} from 'src/app/components/home/home.component';
import { RegistroNuevoEmpleadoComponent} from 'src/app/components/registro-nuevo-empleado/registro-nuevo-empleado.component';
import { CalendarioComponent} from 'src/app/components/calendario/calendario.component';
import { NavbarComponent} from 'src/app/components/navbar/navbar.component';
import { FooterComponent} from 'src/app/components/footer/footer.component';
import { PerfilComponent} from 'src/app/components/perfil/perfil.component';
import { InicioComponent} from 'src/app/components/inicio/inicio.component'
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'empleados', component:EmpleadosComponent},
  {path: 'registro-nuevo-empleado', component:RegistroNuevoEmpleadoComponent},
  {path: 'calendario', component:CalendarioComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
