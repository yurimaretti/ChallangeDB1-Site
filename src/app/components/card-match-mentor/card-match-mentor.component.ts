import { Component, Input } from '@angular/core';
import { FormMentorModel } from 'src/app/models/formMentorModel';
import { HabilidadeModel } from 'src/app/models/habilidadeModel';
import { MatchModel } from 'src/app/models/matchModel';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-card-match-mentor',
  templateUrl: './card-match-mentor.component.html',
  styleUrls: ['./card-match-mentor.component.scss']
})
export class CardMatchMentorComponent {

  @Input() emailAprendiz: string = "";
  @Input() nomeMentor: String = "";
  @Input() emailMentor: string = "";
  @Input() generoMentor: String = "";
  @Input() habilidadeMentor: HabilidadeModel[] | undefined;
  @Input() formacaoMentor: FormMentorModel[] | undefined;

  constructor(
    private apiService: ApiService
  ) { }

  desfazerMatch(): void {
    this.apiService.getMatchPorEmails(this.emailAprendiz, this.emailMentor).subscribe(match => {
      if (match) {
        const updatedMatch: MatchModel = { ...match, curtidaAprendiz: 0 };
        this.apiService.atualizarMatch(match.matchId, updatedMatch).subscribe(updated => {
          alert('Match desfeito!');
          window.location.reload()
        });
      }
    });
  }
}
