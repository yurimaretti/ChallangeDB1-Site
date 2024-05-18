import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GrauInstrucao } from 'src/app/enums/grauInstrucao';

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
    private route: ActivatedRoute
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
        this.router.navigate(['/editar-formacao', this.tipoCadastro, this.email]);
      } else if (this.tipoCadastro === 'Mentor') {
        this.router.navigate(['/editar-formacao', this.tipoCadastro, this.email]);
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
