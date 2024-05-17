import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-form-aprendiz',
  templateUrl: './card-form-aprendiz.component.html',
  styleUrls: ['./card-form-aprendiz.component.scss']
})
export class CardFormAprendizComponent {
  @Input() nomeInstituicao: String = "FIAP";
  @Input() nivelEnsino: String = "Superior - Tecnólogo";
  @Input() nomeCurso: String = "Análise e Desenvolvimento de Sistemas";
}
