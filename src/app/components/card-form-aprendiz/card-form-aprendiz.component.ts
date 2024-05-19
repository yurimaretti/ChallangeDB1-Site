import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-card-form-aprendiz',
  templateUrl: './card-form-aprendiz.component.html',
  styleUrls: ['./card-form-aprendiz.component.scss']
})
export class CardFormAprendizComponent {

  @Input() nomeInstituicao: String = "";
  @Input() nivelEnsino: String = "";
  @Input() nomeCurso: String = "";
  @Input() idFormacao: number = 0;

  constructor(private apiService: ApiService) {}

  excluirFormacao(): void {
    if (confirm('Tem certeza que deseja excluir esta formação?')) {
      this.apiService.excluirFormAprdz(this.idFormacao).subscribe(
        () => {
          // Sucesso na exclusão
          alert('Formação excluída com sucesso!');
          window.location.reload()
        },
        error => {
          // Tratar erro
          console.error('Erro ao excluir formação:', error);
          alert('Ocorreu um erro ao excluir a formação. Tente novamente mais tarde.');
        }
      );
    }
  }
}
