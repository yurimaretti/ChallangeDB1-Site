import { Component, Input } from '@angular/core';
import { FormMentorModel } from 'src/app/models/formMentorModel';
import { HabilidadeModel } from 'src/app/models/habilidadeModel';

@Component({
  selector: 'app-card-match-mentor',
  templateUrl: './card-match-mentor.component.html',
  styleUrls: ['./card-match-mentor.component.scss']
})
export class CardMatchMentorComponent {
  @Input() nomeMentor: String = "";
  @Input() emailMentor: String = "";
  @Input() generoMentor: String = "";
  @Input() habilidadeMentor: HabilidadeModel[] | undefined;
  @Input() formacaoMentor: FormMentorModel[] | undefined;
}
