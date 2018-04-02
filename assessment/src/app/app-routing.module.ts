import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { UsuarioComponent } from './usuario.component';
import { MateriasComponent } from './materias.component'
import { NotasComponent } from './notas.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
