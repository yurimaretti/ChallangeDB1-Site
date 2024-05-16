import { Component } from '@angular/core';
import { Genero } from 'src/app/enums/generos';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent {
  generosEnum = Object.values(Genero);
}
