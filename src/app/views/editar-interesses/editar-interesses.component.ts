import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreasConhecimento } from 'src/app/enums/areasConhecimento';
import { HabilidadeModel } from 'src/app/models/habilidadeModel';
import { InteresseModel } from 'src/app/models/interesseModel';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-editar-interesses',
  templateUrl: './editar-interesses.component.html',
  styleUrls: ['./editar-interesses.component.scss']
})
export class EditarInteressesComponent {

  areasEnum = Object.values(AreasConhecimento);
  tipoCadastro: string = '';
  email: string = '';
  selecionados: Set<string> = new Set<string>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.tipoCadastro = this.route.snapshot.paramMap.get('tipoCadastro') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';
  }

  toggleSelecionado(area: string): void {
    if (this.selecionados.has(area)) {
      this.selecionados.delete(area);
    } else {
      this.selecionados.add(area);
    }
  }

  voltarEditarPerfil(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    }
  }

  salvarInteresses(): void {
    const areasConcatenadas = Array.from(this.selecionados).join(', ');

    if (!areasConcatenadas) {
      alert('Por favor, selecione pelo menos uma área.');
      return;
    }

    if (this.tipoCadastro === 'Aprendiz') {
      const interesse: InteresseModel = {
        interesseId: 0,
        areaInteresse: areasConcatenadas,
        emailAprdz: this.email
      };
      this.apiService.getInteressePorEmail(this.email).subscribe(
        existente => {
          if (existente) {
            interesse.interesseId = existente.interesseId;
            this.apiService.atualizarInteresse(interesse.interesseId, interesse).subscribe(() => {
              alert('Interesses incluídos!');
              this.voltarEditarPerfil();
            });
          }
        },
        error => {
          if (error.status === 404) {
            this.apiService.incluirInteresse(interesse).subscribe(() => {
              alert('Interesses incluídos!');
              this.voltarEditarPerfil();
            });
          } else {
            console.error('Erro ao verificar interesse existente', error);
          }
        }
      );
    } else if (this.tipoCadastro === 'Mentor') {
      const habilidade: HabilidadeModel = {
        habilidadeId: 0,
        areaHabilidade: areasConcatenadas,
        emailMentor: this.email
      };
      this.apiService.getHabilidadePorEmail(this.email).subscribe(
        existente => {
          if (existente) {
            habilidade.habilidadeId = existente.habilidadeId;
            this.apiService.atualizarHabilidade(habilidade.habilidadeId, habilidade).subscribe(() => {
              alert('Habilidades incluídas!');
              this.voltarEditarPerfil();
            });
          }
        },
        error => {
          if (error.status === 404) {
            this.apiService.incluirHabilidade(habilidade).subscribe(() => {
              alert('Habilidades incluídas!');
              this.voltarEditarPerfil();
            });
          } else {
            console.error('Erro ao verificar habilidade existente', error);
          }
        }
      );
    }
  }

  // salvarInteresses(): void {
  //   if (this.tipoCadastro === 'Aprendiz') {
  //     this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
  //   } else if (this.tipoCadastro === 'Mentor') {
  //     this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
  //   }
  // }
}
