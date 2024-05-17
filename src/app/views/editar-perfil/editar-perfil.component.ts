import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genero } from 'src/app/enums/generos';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  formulario!: FormGroup;
  generosEnum = Object.values(Genero);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeUsuario: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
      genero: ['', Validators.required]
    });
  }

  atualizarCadastro() {
    if (this.formulario.valid) {
      this.router.navigate(['/inicio'])
    }
  }
}
