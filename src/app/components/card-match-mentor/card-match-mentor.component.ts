import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-match-mentor',
  templateUrl: './card-match-mentor.component.html',
  styleUrls: ['./card-match-mentor.component.scss']
})
export class CardMatchMentorComponent {
  @Input() nomeMentor: String = "Duílio Alencar";
  @Input() emailMentor: String = "duds@yahoo.com";
  @Input() generoMentor: String = "Masculino";
  @Input() interesseMentor: String = "Direito, Esportes";
  @Input() nivelFormacao: String = "Superior - Bacharel";
  @Input() nomeCurso: String = "Direito";
  @Input() instituicao: String = "Universidade ABC";
}
