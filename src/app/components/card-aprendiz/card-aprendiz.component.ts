import { Component, Input } from '@angular/core';
import { InteresseModel } from 'src/app/models/interesseModel';

@Component({
  selector: 'app-card-aprendiz',
  templateUrl: './card-aprendiz.component.html',
  styleUrls: ['./card-aprendiz.component.scss']
})
export class CardAprendizComponent {
  @Input() nomeAprendiz: String = "";
  @Input() generoAprendiz: String = "";
  @Input() interesseAprendiz: InteresseModel[] | undefined;
}
