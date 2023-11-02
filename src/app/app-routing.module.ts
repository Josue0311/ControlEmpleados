import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent} from 'src/app/components/empleados/empleados.component';
import { LoginComponent} from 'src/app/components/login/login.component'
import { HomeComponent} from 'src/app/components/home/home.component'

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'empleados', component:EmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
