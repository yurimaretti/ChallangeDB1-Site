import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { EditarPerfilComponent } from './views/editar-perfil/editar-perfil.component';
import { AlterarSenhaComponent } from './views/alterar-senha/alterar-senha.component';
import { EditarInteressesComponent } from './views/editar-interesses/editar-interesses.component';
import { EditarFormacaoComponent } from './views/editar-formacao/editar-formacao.component';
import { IncluirFormacaoComponent } from './views/incluir-formacao/incluir-formacao.component';
import { MatchesComponent } from './views/matches/matches.component';

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
    path: 'inicio/:tipoCadastro/:email',
    component: InicioComponent
  },
  {
    path: 'editar-perfil/:tipoCadastro/:email',
    component: EditarPerfilComponent
  },
  {
    path: 'alterar-senha/:tipoCadastro/:email',
    component: AlterarSenhaComponent
  },
  {
    path: 'editar-interesses/:tipoCadastro/:email',
    component: EditarInteressesComponent
  },
  {
    path: 'editar-formacao/:tipoCadastro/:email',
    component: EditarFormacaoComponent
  },
  {
    path: 'incluir-formacao/:tipoCadastro/:email',
    component: IncluirFormacaoComponent
  },
  {
    path: 'matches/:tipoCadastro/:email',
    component: MatchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
