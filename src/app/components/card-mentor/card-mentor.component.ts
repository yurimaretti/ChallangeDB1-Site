import { Component, Input } from '@angular/core';
import { HabilidadeModel } from 'src/app/models/habilidadeModel';
import { ApiService } from 'src/app/services/api-service.service';
import { MatchModel } from 'src/app/models/matchModel';
import { EMPTY, catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-card-mentor',
  templateUrl: './card-mentor.component.html',
  styleUrls: ['./card-mentor.component.scss']
})
export class CardMentorComponent {

  @Input() nomeMentor: String = "";
  @Input() generoMentor: String = "";
  @Input() habilidadeMentor: HabilidadeModel[] | undefined;
  @Input() emailMentor: string = '';
  @Input() emailAprendiz: string = '';

  constructor(
    private apiService: ApiService
  ) { }

  curtirMentor(): void {

    this.apiService.getMatchPorEmails(this.emailAprendiz, this.emailMentor).pipe(
      switchMap((match: MatchModel) => {
        if (match) {
          match.curtidaAprendiz = 1; // Alterando a curtidaAprendiz para 1
          return this.apiService.atualizarMatch(match.matchId, match);
        }
        catchError((error) => {
          console.error('Erro ao curtir aprendiz:', error);
          return EMPTY; // Retorna um Observable vazio para evitar erros
        })
        const novoMatch: MatchModel = {
          matchId: 0,
          curtidaAprendiz: 1,
          curtidaMentor: 0,
          emailAprdz: this.emailAprendiz,
          emailMentor: this.emailMentor
        };
        return this.apiService.incluirMatch(novoMatch).pipe(
          catchError((error) => {
            alert('Erro ao incluir novo match');
            return of(null); // Retorna um Observable nulo para evitar erros
          })
        );
      }),
      catchError((error) => {
        // Não existe um match, incluir novo match
        const novoMatch: MatchModel = {
          matchId: 0,
          curtidaAprendiz: 1,
          curtidaMentor: 0,
          emailAprdz: this.emailAprendiz,
          emailMentor: this.emailMentor
        };
        this.apiService.incluirMatch(novoMatch).subscribe(incluido => {
          alert('Mentor Curtido!');
        });
        return EMPTY; // Retorna um Observable vazio para evitar erros
      })
    ).subscribe((resposta) => {
      if (resposta) {
        alert('Mentor Curtido!');
      } else {
        alert('Mentor Curtido!');
      }
    });
  }
}
