import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    EditarInteressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
