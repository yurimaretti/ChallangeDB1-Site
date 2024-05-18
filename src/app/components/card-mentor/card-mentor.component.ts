import { Component, Input } from '@angular/core';
import { HabilidadeModel } from 'src/app/models/habilidadeModel';

@Component({
  selector: 'app-card-mentor',
  templateUrl: './card-mentor.component.html',
  styleUrls: ['./card-mentor.component.scss']
})
export class CardMentorComponent {
  @Input() nomeMentor: String = "";
  @Input() generoMentor: String = "";
  @Input() habilidadeMentor: HabilidadeModel[] | undefined;
}
