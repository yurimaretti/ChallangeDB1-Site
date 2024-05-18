import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/services/passwordMatchValidator';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent implements OnInit {
  formulario!: FormGroup;
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
      senhaUsuario1: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      senhaUsuario2: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
    }, { validators: passwordMatchValidator('senhaUsuario1', 'senhaUsuario2') });
  }

  alterarSenha() {
    if (this.formulario.valid) {
      if (this.tipoCadastro === 'Aprendiz') {
        this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
      } else if (this.tipoCadastro === 'Mentor') {
        this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
      }
    }
  }

  voltarEditarPerfil() {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    }
  }
}
