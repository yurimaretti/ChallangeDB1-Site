import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GrauInstrucao } from 'src/app/enums/grauInstrucao';

@Component({
  selector: 'app-incluir-formacao',
  templateUrl: './incluir-formacao.component.html',
  styleUrls: ['./incluir-formacao.component.scss']
})
export class IncluirFormacaoComponent implements OnInit {

  formulario!: FormGroup;
  grauEnum = Object.values(GrauInstrucao);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nivel: ['', Validators.required],
      curso: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
      instituicao: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]]
    });
  }

  cadastrarFormacao() {
    if (this.formulario.valid) {
      this.router.navigate(['/editar-formacao'])
    }
  }
}
