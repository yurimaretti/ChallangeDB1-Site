import { Component } from '@angular/core';
import { AreasConhecimento } from 'src/app/enums/areasConhecimento';

@Component({
  selector: 'app-editar-interesses',
  templateUrl: './editar-interesses.component.html',
  styleUrls: ['./editar-interesses.component.scss']
})
export class EditarInteressesComponent {
  areasEnum = Object.values(AreasConhecimento);
}
