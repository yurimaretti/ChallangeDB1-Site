import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/services/passwordMatchValidator';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      senhaUsuario1: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      senhaUsuario2: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
    }, { validators: passwordMatchValidator('senhaUsuario1', 'senhaUsuario2') });
  }

  alterarSenha() {
    if (this.formulario.valid) {
      this.router.navigate(['/editar-perfil'])
    }
  }
}
