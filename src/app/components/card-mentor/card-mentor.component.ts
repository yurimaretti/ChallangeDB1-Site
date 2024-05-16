import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-mentor',
  templateUrl: './card-mentor.component.html',
  styleUrls: ['./card-mentor.component.scss']
})
export class CardMentorComponent {
  @Input() nomeMentor: String = "Duílio Alencar";
  @Input() generoMentor: String = "Masculino";
  @Input() habilidadeMentor: String = "Direito, Esportes";
}
