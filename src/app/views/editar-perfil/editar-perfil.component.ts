import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/enums/generos';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  formulario!: FormGroup;
  generosEnum = Object.values(Genero);
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
      nomeUsuario: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
      genero: ['', Validators.required]
    });
  }

  atualizarCadastro() {
    if (this.formulario.valid) {
      if (this.tipoCadastro === 'Aprendiz') {
        this.router.navigate(['/inicio', this.tipoCadastro, this.email]);
      } else if (this.tipoCadastro === 'Mentor') {
        this.router.navigate(['/inicio', this.tipoCadastro, this.email]);
      }
    }
  }

  voltarInicio(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/inicio', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/inicio', this.tipoCadastro, this.email]);
    }
  }

  navegarEditarInteresses(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-interesses', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/editar-interesses', this.tipoCadastro, this.email]);
    }
  }

  navegarAlterarSenha(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/alterar-senha', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/alterar-senha', this.tipoCadastro, this.email]);
    }
  }

  navegarEditarFormacao(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-formacao', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/editar-formacao', this.tipoCadastro, this.email]);
    }
  }
}
