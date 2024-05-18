import { Component, Input } from '@angular/core';
import { InteresseModel } from 'src/app/models/interesseModel';
import { ApiService } from 'src/app/services/api-service.service';
import { MatchModel } from 'src/app/models/matchModel';
import { EMPTY, catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-card-aprendiz',
  templateUrl: './card-aprendiz.component.html',
  styleUrls: ['./card-aprendiz.component.scss']
})
export class CardAprendizComponent {

  @Input() nomeAprendiz: String = "";
  @Input() generoAprendiz: String = "";
  @Input() interesseAprendiz: InteresseModel[] | undefined;
  @Input() emailMentor: string = '';
  @Input() emailAprendiz: string = '';

  constructor(
    private apiService: ApiService
  ) { }

  curtirAprendiz(): void {

    this.apiService.getMatchPorEmails(this.emailAprendiz, this.emailMentor).pipe(
      switchMap((match: MatchModel) => {
        if (match) {
          match.curtidaMentor = 1; // Alterando a curtidaMentor para 1
          return this.apiService.atualizarMatch(match.matchId, match);
        }
        catchError((error) => {
          console.error('Erro ao curtir aprendiz:', error);
          return EMPTY; // Retorna um Observable vazio para evitar erros
        })
        const novoMatch: MatchModel = {
          matchId: 0,
          curtidaAprendiz: 0,
          curtidaMentor: 1,
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
          curtidaAprendiz: 0,
          curtidaMentor: 1,
          emailAprdz: this.emailAprendiz,
          emailMentor: this.emailMentor
        };
        this.apiService.incluirMatch(novoMatch).subscribe(incluido => {
          alert('Aprendiz Curtido!');
        });
        return EMPTY; // Retorna um Observable vazio para evitar erros
      })
    ).subscribe((resposta) => {
      if (resposta) {
        alert('Aprendiz Curtido!');
      } else {
        alert('Aprendiz Curtido!');
      }
    });
  }
}

