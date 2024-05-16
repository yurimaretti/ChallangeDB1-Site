import { Component } from '@angular/core';
import { AreasConhecimento } from 'src/app/enums/areasConhecimento';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  areasEnum = Object.values(AreasConhecimento);
}
