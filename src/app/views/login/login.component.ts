import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AprendizModel } from 'src/app/models/aprendizModel';
import { MentorModel } from 'src/app/models/mentorModel';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      emailUsuario: ['', [Validators.required, Validators.email]],
      tipoCadastro: ['', Validators.required],
      senhaUsuario: ['', Validators.required]
    });
  }

  realizarLogin() {
    if (this.formulario.valid) {
      const email = this.formulario.get('emailUsuario')?.value;
      const senha = this.formulario.get('senhaUsuario')?.value;
      const tipoCadastro = this.formulario.get('tipoCadastro')?.value;

      if (tipoCadastro === 'Aprendiz') {
        this.apiService.getAprendizPorEmail(email).subscribe(
          (data: AprendizModel) => {
            if (data && data.senhaAprendiz === senha) {
              this.router.navigate(['/inicio', tipoCadastro, email]);
            } else {
              alert('Senha incorreta');
            }
          },
          error => {
            alert('Usuário não cadastrado');
          }
        );
      } else if (tipoCadastro === 'Mentor') {
        this.apiService.getMentorPorEmail(email).subscribe(
          (data: MentorModel) => {
            if (data && data.senhaMentor === senha) {
              this.router.navigate(['/inicio', tipoCadastro, email]);
            } else {
              alert('Senha incorreta');
            }
          },
          error => {
            alert('Usuário não cadastrado');
          }
        );
      }
    }
  }
}
