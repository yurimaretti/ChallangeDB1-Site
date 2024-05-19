import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';
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
    private route: ActivatedRoute,
    private apiService: ApiService
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
      const novaSenha = this.formulario.get('senhaUsuario1')?.value;

      if (this.tipoCadastro === 'Aprendiz') {
        this.apiService.getAprendizPorEmail(this.email).subscribe(
          aprendiz => {
            aprendiz.senhaAprendiz = novaSenha;
            this.apiService.atualizarAprdz(this.email, aprendiz).subscribe(
              response => {
                alert('Senha Alterada!');
                this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
              },
              error => {
                console.error('Erro ao alterar senha do Aprendiz:', error);
              }
            );
          },
          error => {
            console.error('Erro ao buscar dados do Aprendiz:', error);
          }
        );
      } else if (this.tipoCadastro === 'Mentor') {
        this.apiService.getMentorPorEmail(this.email).subscribe(
          mentor => {
            mentor.senhaMentor = novaSenha;
            this.apiService.atualizarMentor(this.email, mentor).subscribe(
              response => {
                alert('Senha Alterada!');
                this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
              },
              error => {
                console.error('Erro ao alterar senha do Mentor:', error);
              }
            );
          },
          error => {
            console.error('Erro ao buscar dados do Mentor:', error);
          }
        );
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
