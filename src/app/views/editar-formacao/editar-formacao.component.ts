import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormAprdzModel } from 'src/app/models/formAprendizModel';
import { FormMentorModel } from 'src/app/models/formMentorModel';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-editar-formacao',
  templateUrl: './editar-formacao.component.html',
  styleUrls: ['./editar-formacao.component.scss']
})
export class EditarFormacaoComponent {

  tipoCadastro: string = '';
  email: string = '';
  formacoesAprendiz: FormAprdzModel[] = [];
  formacoesMentor: FormMentorModel[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.tipoCadastro = this.route.snapshot.paramMap.get('tipoCadastro') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';
  }

  navegarVoltarEditarPerfil(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    }
  }

  navegarIncluirFormacao(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/incluir-formacao', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/incluir-formacao', this.tipoCadastro, this.email]);
    }
  }

  consultarFormacoes(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.apiService.getFormAprdzPorEmail(this.email).subscribe(data => {
        this.formacoesAprendiz = data;
      });
    } else if (this.tipoCadastro === 'Mentor') {
      this.apiService.getFormMentorPorEmail(this.email).subscribe(data => {
        this.formacoesMentor = data;
      });
    }
  }
}
