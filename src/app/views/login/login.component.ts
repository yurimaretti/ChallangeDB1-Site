import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      this.router.navigate(['/inicio'])
    }
  }
}
