import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { EditarPerfilComponent } from './views/editar-perfil/editar-perfil.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'editar-perfil',
    component: EditarPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
