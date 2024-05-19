import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-form-mentor',
  templateUrl: './card-form-mentor.component.html',
  styleUrls: ['./card-form-mentor.component.scss']
})
export class CardFormMentorComponent {
  @Input() nomeInstituicao: String = "";
  @Input() nivelEnsino: String = "";
  @Input() nomeCurso: String = "";
}
