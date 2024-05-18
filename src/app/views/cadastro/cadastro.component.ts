import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genero } from '../../enums/generos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/services/passwordMatchValidator';
import { ApiService } from 'src/app/services/api-service.service';
import { AprendizModel } from 'src/app/models/aprendizModel';
import { MentorModel } from 'src/app/models/mentorModel';

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
    private apiService: ApiService
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
      const tipoCadastro = this.formulario.get('tipoCadastro')?.value;

      if (tipoCadastro === 'Aprendiz') {
        const aprendiz: AprendizModel = {
          emailAprendiz: this.formulario.get('emailUsuario')?.value,
          nomeAprendiz: this.formulario.get('nomeUsuario')?.value,
          generoAprendiz: this.formulario.get('genero')?.value,
          senhaAprendiz: this.formulario.get('senhaUsuario1')?.value,
          formacaoAprendiz: [],
          interesse: [],
          match: []
        };
        this.apiService.incluirAprdz(aprendiz).subscribe(
          response => {
            // Sucesso no cadastro
            alert('Aprendiz cadastrado!');
            this.router.navigate(['/login']);
          },
          error => {
            // Tratar erro
            console.error('Erro ao cadastrar aprendiz:', error);
          }
        );
      } else if (tipoCadastro === 'Mentor') {
        const mentor: MentorModel = {
          emailMentor: this.formulario.get('emailUsuario')?.value,
          nomeMentor: this.formulario.get('nomeUsuario')?.value,
          generoMentor: this.formulario.get('genero')?.value,
          senhaMentor: this.formulario.get('senhaUsuario1')?.value,
          formacaoMentor: [],
          habilidade: [],
          match: []
        };
        this.apiService.incluirMentor(mentor).subscribe(
          response => {
            // Sucesso no cadastro
            alert('Mentor cadastrado!');
            this.router.navigate(['/login']);
          },
          error => {
            // Tratar erro
            console.error('Erro ao cadastrar mentor:', error);
          }
        );
      }
    }
  }
}
