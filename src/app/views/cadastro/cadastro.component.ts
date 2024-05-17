import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genero } from '../../enums/generos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/services/passwordMatchValidator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario!: FormGroup;
  generosEnum = Object.values(Genero);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeUsuario: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
      emailUsuario: ['', [Validators.required, Validators.email]],
      genero: ['', Validators.required],
      tipoCadastro: ['', Validators.required],
      senhaUsuario1: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      senhaUsuario2: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
    }, { validators: passwordMatchValidator('senhaUsuario1', 'senhaUsuario2') });
  }

  cadastrarUsuario() {
    if (this.formulario.valid) {
      this.router.navigate(['/login'])
    }
  }
}
