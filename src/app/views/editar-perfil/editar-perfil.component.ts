import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/enums/generos';
import { AprendizModel } from 'src/app/models/aprendizModel';
import { HabilidadeModel } from 'src/app/models/habilidadeModel';
import { InteresseModel } from 'src/app/models/interesseModel';
import { MentorModel } from 'src/app/models/mentorModel';
import { ApiService } from 'src/app/services/api-service.service';

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
  interessesAprendiz: InteresseModel[] | undefined;
  habilidadesMentor: HabilidadeModel[] | undefined;
  areaInteresse: string = '';
  areaHabilidade: string = '';

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
      nomeUsuario: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
      genero: ['', Validators.required]
    });
  }

  consultarDados(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.apiService.getAprendizPorEmail(this.email).subscribe(
        (data: AprendizModel) => {
          this.formulario = this.formBuilder.group({
            nomeUsuario: [data.nomeAprendiz, [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
            genero: [data.generoAprendiz, Validators.required]
          });
          data.interesse!.forEach(interesse => {
            this.areaInteresse = interesse.areaInteresse;
          });
        }
      );
    } else if (this.tipoCadastro === 'Mentor') {
      this.apiService.getMentorPorEmail(this.email).subscribe(
        (data: MentorModel) => {
          this.formulario = this.formBuilder.group({
            nomeUsuario: [data.nomeMentor, [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
            genero: [data.generoMentor, Validators.required]
          });
          data.habilidade!.forEach(habilidade => {
            this.areaHabilidade = habilidade.areaHabilidade;
          });
        }
      );
    }
  }

  atualizarCadastro(): void {
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
