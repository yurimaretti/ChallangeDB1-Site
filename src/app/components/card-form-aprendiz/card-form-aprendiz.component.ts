import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-form-aprendiz',
  templateUrl: './card-form-aprendiz.component.html',
  styleUrls: ['./card-form-aprendiz.component.scss']
})
export class CardFormAprendizComponent {
  @Input() nomeInstituicao: String = "";
  @Input() nivelEnsino: String = "";
  @Input() nomeCurso: String = "";
}
