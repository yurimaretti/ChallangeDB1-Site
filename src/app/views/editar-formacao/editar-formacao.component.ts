import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-formacao',
  templateUrl: './editar-formacao.component.html',
  styleUrls: ['./editar-formacao.component.scss']
})
export class EditarFormacaoComponent {

  tipoCadastro: string = '';
  email: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tipoCadastro = this.route.snapshot.paramMap.get('tipoCadastro') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';
  }

  navegarVoltarEditarPerfil(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    }
  }

  navegarIncluirFormacao(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/incluir-formacao', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/incluir-formacao', this.tipoCadastro, this.email]);
    }
  }
}
