import { Component, Input } from '@angular/core';
import { FormAprdzModel } from 'src/app/models/formAprendizModel';
import { InteresseModel } from 'src/app/models/interesseModel';
import { MatchModel } from 'src/app/models/matchModel';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-card-match-aprendiz',
  templateUrl: './card-match-aprendiz.component.html',
  styleUrls: ['./card-match-aprendiz.component.scss']
})
export class CardMatchAprendizComponent {

  @Input() emailMentor: string = "";
  @Input() nomeAprendiz: String = "";
  @Input() emailAprendiz: string = "";
  @Input() generoAprendiz: String = "";
  @Input() interesseAprendiz: InteresseModel[] | undefined;
  @Input() formacaoAprendiz: FormAprdzModel[] | undefined;

  constructor(
    private apiService: ApiService
  ) { }

  desfazerMatch(): void {
    this.apiService.getMatchPorEmails(this.emailAprendiz, this.emailMentor).subscribe(match => {
      if (match) {
        const updatedMatch: MatchModel = { ...match, curtidaMentor: 0 };
        this.apiService.atualizarMatch(match.matchId, updatedMatch).subscribe(updated => {
          alert('Match desfeito!');
          window.location.reload()
        });
      }
    });
  }
}
