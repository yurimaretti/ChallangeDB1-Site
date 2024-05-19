import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { CardComponent } from './components/card/card.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { CardAprendizComponent } from './components/card-aprendiz/card-aprendiz.component';
import { CardMentorComponent } from './components/card-mentor/card-mentor.component';
import { EditarPerfilComponent } from './views/editar-perfil/editar-perfil.component';
import { AlterarSenhaComponent } from './views/alterar-senha/alterar-senha.component';
import { EditarInteressesComponent } from './views/editar-interesses/editar-interesses.component';
import { CardFormMentorComponent } from './components/card-form-mentor/card-form-mentor.component';
import { CardFormAprendizComponent } from './components/card-form-aprendiz/card-form-aprendiz.component';
import { EditarFormacaoComponent } from './views/editar-formacao/editar-formacao.component';
import { IncluirFormacaoComponent } from './views/incluir-formacao/incluir-formacao.component';
import { MatchesComponent } from './views/matches/matches.component';
import { CardMatchAprendizComponent } from './components/card-match-aprendiz/card-match-aprendiz.component';
import { CardMatchMentorComponent } from './components/card-match-mentor/card-match-mentor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CardComponent,
    CadastroComponent,
    InicioComponent,
    CardAprendizComponent,
    CardMentorComponent,
    EditarPerfilComponent,
    AlterarSenhaComponent,
    EditarInteressesComponent,
    CardFormMentorComponent,
    CardFormAprendizComponent,
    EditarFormacaoComponent,
    IncluirFormacaoComponent,
    MatchesComponent,
    CardMatchAprendizComponent,
    CardMatchMentorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
