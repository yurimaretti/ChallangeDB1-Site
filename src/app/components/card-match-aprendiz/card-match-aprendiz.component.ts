import { Component, Input } from '@angular/core';
import { FormAprdzModel } from 'src/app/models/formAprendizModel';
import { InteresseModel } from 'src/app/models/interesseModel';

@Component({
  selector: 'app-card-match-aprendiz',
  templateUrl: './card-match-aprendiz.component.html',
  styleUrls: ['./card-match-aprendiz.component.scss']
})
export class CardMatchAprendizComponent {
  @Input() nomeAprendiz: String = "";
  @Input() emailAprendiz: String = "";
  @Input() generoAprendiz: String = "";
  @Input() interesseAprendiz: InteresseModel[] | undefined;
  @Input() formacaoAprendiz: FormAprdzModel[] | undefined;
}
