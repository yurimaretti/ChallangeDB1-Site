import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GrauInstrucao } from 'src/app/enums/grauInstrucao';
import { FormAprdzModel } from 'src/app/models/formAprendizModel';
import { FormMentorModel } from 'src/app/models/formMentorModel';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-incluir-formacao',
  templateUrl: './incluir-formacao.component.html',
  styleUrls: ['./incluir-formacao.component.scss']
})
export class IncluirFormacaoComponent implements OnInit {

  formulario!: FormGroup;
  grauEnum = Object.values(GrauInstrucao);
  tipoCadastro: string = '';
  email: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.tipoCadastro = this.route.snapshot.paramMap.get('tipoCadastro') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';

    this.formulario = this.formBuilder.group({
      nivel: ['', Validators.required],
      curso: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
      instituicao: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]]
    });
  }

  cadastrarFormacao() {

    if (this.formulario.valid) {

      if (this.tipoCadastro === 'Aprendiz') {
        const formacao: FormAprdzModel = {
          nivelFormAprdz: this.formulario.get('nivel')?.value,
          cursoAprdz: this.formulario.get('curso')?.value,
          instAprdz: this.formulario.get('instituicao')?.value,
          formAprdzId: 0,
          emailAprendiz: this.email
        };
        this.apiService.incluirFormAprdz(formacao).subscribe(
          response => {
            // Sucesso no cadastro
            this.router.navigate(['/editar-formacao', this.tipoCadastro, this.email]);
            alert('Formação cadastrada!');
          },
          error => {
            // Tratar erro
            console.error('Erro ao cadastrar formação:', error);
          }
        );
      } else if (this.tipoCadastro === 'Mentor') {
        const formacao: FormMentorModel = {
          nivelFormMentor: this.formulario.get('nivel')?.value,
          cursoMentor: this.formulario.get('curso')?.value,
          instMentor: this.formulario.get('instituicao')?.value,
          formMentorId: 0,
          emailMentor: this.email
        };
        this.apiService.incluirFormMentor(formacao).subscribe(
          response => {
            // Sucesso no cadastro
            this.router.navigate(['/editar-formacao', this.tipoCadastro, this.email]);
            alert('Formação cadastrada!');
          },
          error => {
            // Tratar erro
            console.error('Erro ao cadastrar formação:', error);
          }
        );
      }
    }

  }

  voltarEditarFormacao(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-formacao', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/editar-formacao', this.tipoCadastro, this.email]);
    }
  }
}
